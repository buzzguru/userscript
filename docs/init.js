/**
 * Auto generated by scripts/run/build.js
 */
const entrypoints = ["https://buzzguru.github.io/userscript/static/js/runtime-main.0d5b3013.js","https://buzzguru.github.io/userscript/static/js/2.3d9f084f.chunk.js","https://buzzguru.github.io/userscript/static/js/main.af1dd3e3.chunk.js"];
console.log('[@lskjs/userscript] init 2021-11-30T14:21:55.721Z');
/**
 *
 */
(function() {
    'use strict';
    if (typeof entrypoints === 'undefined') {
      console.error('[@lskjs/userscript] Empty entrypoints')
      return;
    }
    console.log('[@lskjs/userscript] entrypoints', entrypoints)

    entrypoints.forEach(entrypoint => {
      console.log('[@lskjs/userscript] Injecting entrypoint', entrypoint)
      const script = document.createElement('script');
      script.src = entrypoint;
      document.body.appendChild(script);
    })
    console.log('[@lskjs/userscript] inited success')
})();

