// ==UserScript==
// @name         Copilot [STAGING]
// @namespace    http://tampermonkey.net/
// @version      1.38.0
// @downloadURL  https://github.com/buzzguru/userscript/raw/master/userscript/copilot-staging.user.js
// @updateURL    https://github.com/buzzguru/userscript/raw/master/userscript/copilot-staging.user.js
// @description  Influencers insights
// @author       BuzzGuru

// @match        *://*/*

// @match        *://youtube.com/*
// @match        *://*.youtube.com/*

// @match        *://instagram.com/*
// @match        *://*.instagram.com/*

// @match        *://tiktok.com/*
// @match        *://*.tiktok.com/*

// @match        *://twitch.tv/*
// @match        *://*.twitch.tv/*

// @match        *://*.data.ai/*

// @match        *://modash.io/*
// @match        *://*.modash.io/*

// @match        *://hypeauditor.com/*
// @match        *://*.hypeauditor.com/*

// @connect      api.buzz.guru
// @connect      buzzguru.com
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
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-start
// ==/UserScript==

/* global GM_info GM_xmlhttpRequest GM_addElement GM_setValue GM_getValue unsafeWindow */
/* eslint-disable camelcase */

// eslint-disable-next-line no-nested-ternary
const config = {
  "stage": "staging",
  "plugins": [
    "appannie",
    "hypeauditor",
    "igram",
    "loaderto",
    "instagram",
    "modash",
    "toolbar",
    "downloader"
  ],
  "debug": false,
  "baseURL": "https://buzzguru.github.io/staging-userscript",
  "client": {
    "baseURL": "https://userscript.buzz.guru/api"
  }
};
config.version = config.stage === 'dev' ? `${GM_info.script.version}.${Math.random()}`: GM_info.script.version;

const log = console;
const { debug: isDebug, baseURL, version } = config;
// eslint-disable-next-line no-console
log.trace = (...args) => console.log('[@lskjs/userscript]', ...args);
if (isDebug) log.trace(config);
unsafeWindow.__lskjs = { env: config, config, log, GM_info, GM_xmlhttpRequest, GM_addElement, unsafeWindow, GM_setValue, GM_getValue };

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
  if (isDebug) log.trace('[@lskjs/userscript]', 'injectJs start', url);
  return request(url)
    .then(({ responseText }) => {
      unsafeWindow.__lskjs.responseText = responseText;
      GM_addElement('script', { textContent: responseText });

      if (isDebug) log.trace('[@lskjs/userscript]', 'injectJs success', url);
    })
    .catch((err) => {
      log.error('[@lskjs/userscript]', 'injectJs err', url, { err });
    });
}

async function init() {
  let entrypoints;
  if (isDebug) {
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

