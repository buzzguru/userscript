// ==UserScript==
// @name         Example
// @version      0.1
// @description  Script from a website
// @author       You
// @match        *
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
