// ==UserScript==
// @name         BuzzGuru Copilot [dev]
// @namespace    http://tampermonkey.net/
// @version      1.1.1
// @downloadURL  https://github.com/buzzguru/userscript/raw/master/userscript/mega.user.js
// @updateURL    https://github.com/buzzguru/userscript/raw/master/userscript/mega.user.js
// @description  try to take over the world!
// @author       buzzguru

// @match        *://*/*

// @match        *://youtube.com/*
// @match        *://*.youtube.com/*

// @match        *://instagram.com/*
// @match        *://*.instagram.com/*

// @match        *://tiktok.com/*
// @match        *://*.tiktok.com/*

// @match        *://twitch.tv/*
// @match        *://*.twitch.tv/*

// @match        *://*.appannie.com/*

// @match        *://modash.io/*
// @match        *://*.modash.io/*

// @match        *://hypeauditor.com/*
// @match        *://*.hypeauditor.com/*

// @connect      worker.buzz.guru
// @connect      127.0.0.1
// @connect      localhost
// @connect      cdn.jsdelivr.net
// @connect      buzzguru.github.io
// @connect      userscript.buzzguru.com

// @icon         https://buzzguru.github.io/userscript/logo.png
// @grant        GM_xmlhttpRequest
// @grant        GM_addElement
// @grant        GM_addScript
// @run-at       document-start
// ==/UserScript==

/* global GM_info GM_xmlhttpRequest GM_addElement unsafeWindow */
/* eslint-disable camelcase */

const isDev = GM_info.script.name.includes('[dev]');
const version = GM_info.script.version + (isDev ? `.${Math.random()}` : '');
const baseURL = isDev ? 'http://localhost:3000' : 'https://buzzguru.github.io/userscript';
const log = console;
const env = { isDev, version, baseURL };
// eslint-disable-next-line no-console
log.trace = console.log;
if (isDev) log.trace('[@lskjs/userscript]', { isDev, version, baseURL });
unsafeWindow.__lskjs = { env, log, GM_info, GM_xmlhttpRequest, GM_addElement };
unsafeWindow.__extention = unsafeWindow.__lskjs;

function request(url, { method = 'GET' } = {}) {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      method,
      url,
      onload: resolve,
      onerror: reject,
    });
  });
}

function injectJs(url) {
  if (isDev) log.trace('[@lskjs/userscript]', 'injectJs start', url);
  return request(url)
    .then(({ responseText }) => {
      unsafeWindow.__lskjs.responseText = responseText;
      GM_addElement('script', { textContent: responseText });

      if (isDev) log.trace('[@lskjs/userscript]', 'injectJs success', url);
    })
    .catch((err) => {
      log.error('[@lskjs/userscript]', 'injectJs err', url, { err });
    });
}

async function init() {
  let entrypoints;
  if (isDev) {
    entrypoints = ['test.js', 'static/js/bundle.js', 'static/js/vendors~main.chunk.js', 'static/js/main.chunk.js'];
  } else {
    const assetManifestUrl = `${baseURL}/asset-manifest.json?v=${version}`;
    const assetManifest = await request(assetManifestUrl).then(({ responseText }) => JSON.parse(responseText));
    entrypoints = assetManifest.entrypoints;
  }
  entrypoints = entrypoints.map((src) => `${baseURL}/${src}`);
  log.trace('[@lskjs/userscript]', 'entrypoints', entrypoints);
  entrypoints.map((url) => injectJs(url));
  log.trace('[@lskjs/userscript]', 'inited');
}

init().catch((err) => log.error('[@lskjs/userscript]', 'init err', { err }));
