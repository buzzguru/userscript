// ==UserScript==
// @name         Mega Userscript Helper 
// @namespace    http://tampermonkey.net/
// @version      0.0.4
// @downloadURL  https://github.com/buzzguru/userscript/raw/master/userscript/mega.user.js
// @updateURL    https://github.com/buzzguru/userscript/raw/master/userscript/mega.user.js
// @description  try to take over the world!
// @author       buzzguru
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==


GM_xmlhttpRequest({
  method: 'GET',
  // from other domain than the @match one (.org / .com):
  url: 'https://buzzguru.github.io/userscript/script.js',
  onload: (ev) => {
    const e = document.createElement('script');
    e.innerText = ev.responseText;
    document.head.appendChild(e);
  },
});
