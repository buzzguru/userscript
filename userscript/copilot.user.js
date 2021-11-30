// ==UserScript==
// @name         BuzzGuru Copilot
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @downloadURL  https://github.com/buzzguru/userscript/raw/master/userscript/mega.user.js
// @updateURL    https://github.com/buzzguru/userscript/raw/master/userscript/mega.user.js
// @description  try to take over the world!
// @author       buzzguru

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

// @connect      localhost
// @connect      buzzguru.github.io
// @connect      userscript.buzzguru.com

// @icon         https://buzzguru.github.io/userscript/logo.png
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

try {
  const isDev = GM_info.script.name.includes('[dev]');
  const version = GM_info.script.version + (isDev ? '.' + Math.random() : '')
  const baseURL = isDev ? 'http://localhost:3000' : 'https://buzzguru.github.io/userscript';
  const url = baseURL + '/init.js?v=' + version;
  const env = {
    isDev,
    version,
    baseURL,
    url,
    GM_info,
  };
  if (isDev) {
    console.log('[@lskjs/userscript]', { isDev, version, baseURL, url });
  }
  unsafeWindow.__extention = { env };
  console.log('[@lskjs/userscript]', 'injecting', url);
  GM_xmlhttpRequest({
    method: 'GET',
    url,
    onload: (ev) => {
      if (isDev) {
        console.log('[@lskjs/userscript]', 'loaded');
      }
      const e = document.createElement('script');
      e.innerText = ev.responseText;
      document.head.appendChild(e);
      if (isDev) {
        console.log('[@lskjs/userscript]', 'appended');
      }
    },
    onerror: (err) => {
      console.error('[@lskjs/userscript]', 'inject', { err });
    },
  });
} catch(err) {
  console.error('[@lskjs/userscript]', { err });
}

