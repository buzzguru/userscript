/**
 * Auto generated by scripts/run/build.js
 */
const assetManifest = {"files":{"main.js":"/static/js/main.63de6a11.chunk.js","main.js.map":"/static/js/main.63de6a11.chunk.js.map","runtime-main.js":"/static/js/runtime-main.0d5b3013.js","runtime-main.js.map":"/static/js/runtime-main.0d5b3013.js.map","static/js/2.63885f66.chunk.js":"/static/js/2.63885f66.chunk.js","static/js/2.63885f66.chunk.js.map":"/static/js/2.63885f66.chunk.js.map","index.html":"/index.html","static/js/2.63885f66.chunk.js.LICENSE.txt":"/static/js/2.63885f66.chunk.js.LICENSE.txt","vendor.js":"/static/js/2.63885f66.chunk.js"},"entrypoints":["static/js/runtime-main.0d5b3013.js","static/js/2.63885f66.chunk.js","static/js/main.63de6a11.chunk.js"]};
console.log('[@lskjs/userscript] init 2021-11-30T16:52:04.660Z');
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

