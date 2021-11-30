alert('Hello World 2')



(function() {
    'use strict';
  
    const el = document.createElement('div');
    el.style.position = 'fixed';
    el.style.zIndex = 9999;
    el.style.background = 'white';
    el.style.borderRadius = '16px';
    el.style.right = 0;
    el.style.bottom = 0;
    const img = document.createElement('img');
    img.src = "https://buzzguru.com/_next-assets/favicons/apple-icon-57x57.png";
    el.appendChild(img);
    document.body.appendChild(el);
    const GTM = document.createElement('script');
    GTM.src = "https://www.googletagmanager.com/gtag/js?id=G-39TZY8GR1N";
    document.body.appendChild(GTM);
    const scr = document.createElement('script');
    scr.innerHTML = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-39TZY8GR1N');`;
    document.body.appendChild(scr);
  })();