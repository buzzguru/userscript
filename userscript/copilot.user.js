// ==UserScript==
// @name         BuzzGuru Copilot
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @downloadURL  https://github.com/buzzguru/userscript/raw/master/userscript/mega.user.js
// @updateURL    https://github.com/buzzguru/userscript/raw/master/userscript/mega.user.js
// @description  try to take over the world!
// @author       buzzguru

// @match        *://*.appannie.com/*

// @match        https://youtube.com/*
// @match        https://*.youtube.com/*

// @match        https://instagram.com/*
// @match        https://*.instagram.com/*

// @match        https://tiktok.com/*
// @match        https://*.tiktok.com/*

// @match        https://twitch.com/*
// @match        https://*.twitch.com/*

// @match        https://modash.io/*
// @match        https://*.modash.io/*

// @connect      buzzguru.github.io
// @connect      userscript.buzzguru.com

// @icon         https://buzzguru.github.io/userscript/logo.png
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

const isDev = 1;
const version = '1.0.0' + (isDev ? '.' + Math.random() : '')

GM_xmlhttpRequest({
  method: 'GET',
  url: 'https://buzzguru.github.io/userscript/init.js?v=' + version,
  onload: (ev) => {
    const e = document.createElement('script');
    e.innerText = ev.responseText;
    document.head.appendChild(e);
  },
});
