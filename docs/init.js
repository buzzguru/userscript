/**
 * Auto generated by scripts/run/build.js
 */
const assetManifest = {"files":{"main.js":"/static/js/main.9f7a554c.chunk.js","main.js.map":"/static/js/main.9f7a554c.chunk.js.map","runtime-main.js":"/static/js/runtime-main.0d5b3013.js","runtime-main.js.map":"/static/js/runtime-main.0d5b3013.js.map","static/js/2.9be69c36.chunk.js":"/static/js/2.9be69c36.chunk.js","static/js/2.9be69c36.chunk.js.map":"/static/js/2.9be69c36.chunk.js.map","index.html":"/index.html","static/js/2.9be69c36.chunk.js.LICENSE.txt":"/static/js/2.9be69c36.chunk.js.LICENSE.txt","vendor.js":"/static/js/2.9be69c36.chunk.js"},"entrypoints":["static/js/runtime-main.0d5b3013.js","static/js/2.9be69c36.chunk.js","static/js/main.9f7a554c.chunk.js"]};
const buildDate = 1657725817403;
console.log('[@lskjs/userscript] buildDate 2022-07-13T15:23:37.403Z');
/**
 *
 */
(function() {
  'use strict';
  let entrypoints;
  let v;
  console.log('[@lskjs/userscript]', 'init');
  try {
    console.log('typeof GM_info', typeof GM_info)

  }catch(err){
    console.error('[@lskjs/userscript]', err);
  }
  if (typeof buildDate === 'undefined') {
    v = Date.now()
  } else {
    v = buildDate;
  }
  try {
    if (typeof assetManifest === 'undefined') {
      entrypoints = [
        'static/js/bundle.js',
        'static/js/vendors~main.chunk.js',
        'static/js/main.chunk.js',
      ]
    } else {
      entrypoints = assetManifest.entrypoints;
    }
  } catch(err){
    console.error('[@lskjs/userscript]', err);
  }
  try {
    if (typeof window.__lskjs === 'undefined') {
      console.error('[@lskjs/userscript]', '!__lskjs');
    } else {
      const baseURL = window.__lskjs.env.baseURL;
      entrypoints = entrypoints.map(src => baseURL + '/' + src + '?v=' + v);
    }
  } catch(err){
    console.error('[@lskjs/userscript]', err);
  }
  if (typeof entrypoints === 'undefined') {
    console.error('[@lskjs/userscript]', 'Empty entrypoints');
    return;
  }
  console.log('[@lskjs/userscript]', 'entrypoints', entrypoints);

  entrypoints.forEach(entrypoint => {
    console.log('[@lskjs/userscript]', 'Injecting entrypoint', entrypoint);
    const script = document.createElement('script');
    script.src = entrypoint;
    document.body.appendChild(script);
  });
  console.log('[@lskjs/userscript]', 'inited');
})();

