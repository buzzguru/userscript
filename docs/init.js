/**
 * Auto generated by scripts/run/build.js
 */
const assetManifest = {"files":{"main.js":"/static/js/main.8ee2508b.chunk.js","main.js.map":"/static/js/main.8ee2508b.chunk.js.map","runtime-main.js":"/static/js/runtime-main.0d5b3013.js","runtime-main.js.map":"/static/js/runtime-main.0d5b3013.js.map","static/js/2.840ab1bb.chunk.js":"/static/js/2.840ab1bb.chunk.js","static/js/2.840ab1bb.chunk.js.map":"/static/js/2.840ab1bb.chunk.js.map","index.html":"/index.html","static/js/2.840ab1bb.chunk.js.LICENSE.txt":"/static/js/2.840ab1bb.chunk.js.LICENSE.txt","vendor.js":"/static/js/2.840ab1bb.chunk.js"},"entrypoints":["static/js/runtime-main.0d5b3013.js","static/js/2.840ab1bb.chunk.js","static/js/main.8ee2508b.chunk.js"]};
console.log('[@lskjs/userscript] init 2021-12-01T14:36:36.854Z');
/**
 *
 */
(function() {
  'use strict';
  let entrypoints;
  console.log('[@lskjs/userscript]', 'init');
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
    if (typeof window.__extention === 'undefined') {
      console.error('[@lskjs/userscript]', '!__extention');
    } else {
      const baseURL = window.__extention.env.baseURL;
      entrypoints = entrypoints.map(src => baseURL + '/' + src);
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

