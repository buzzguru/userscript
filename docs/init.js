/**
 * Auto generated by scripts/run/build.js
 */
const assetManifest = {"files":{"main.js":"/static/js/main.ae1dec24.chunk.js","main.js.map":"/static/js/main.ae1dec24.chunk.js.map","runtime-main.js":"/static/js/runtime-main.0d5b3013.js","runtime-main.js.map":"/static/js/runtime-main.0d5b3013.js.map","static/js/2.fca71b34.chunk.js":"/static/js/2.fca71b34.chunk.js","static/js/2.fca71b34.chunk.js.map":"/static/js/2.fca71b34.chunk.js.map","index.html":"/index.html","static/js/2.fca71b34.chunk.js.LICENSE.txt":"/static/js/2.fca71b34.chunk.js.LICENSE.txt","vendor.js":"/static/js/2.fca71b34.chunk.js"},"entrypoints":["static/js/runtime-main.0d5b3013.js","static/js/2.fca71b34.chunk.js","static/js/main.ae1dec24.chunk.js"]};
const buildDate = 1649409302532;
console.log('[@lskjs/userscript] buildDate 2022-04-08T09:15:02.532Z');
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

