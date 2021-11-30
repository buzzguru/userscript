// ==UserScript==
// @name         Mega Userscript Helper 
// @namespace    http://tampermonkey.net/
// @version      0.0.7
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
// @icon         https://buzzguru.com/_next-assets/favicons/apple-icon-57x57.png
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

GM_xmlhttpRequest({
  method: 'GET',
  // from other domain than the @match one (.org / .com):
  url: 'https://buzzguru.github.io/userscript/script.js?v=0.0.7',
  onload: (ev) => {
    const e = document.createElement('script');
    e.innerText = ev.responseText;
    document.head.appendChild(e);
  },
});
