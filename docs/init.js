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
    if (typeof window.__extention === 'undefined') {
      console.error('[@lskjs/userscript]', '!__extention');
    } else {
      const baseURL = window.__extention.env.baseURL;
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

