this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/rulesofthumb.css',
        '/index.html',
        '/jquery-ui.css',
        '/images/',
        '/images/new.png',
        '/images/ui-bg_flat_75_ffffff_40x100.png',
        '/images/ui-bg_glass_65_ffffff_1x400.png',
        '/images/ui-bg_glass_75_e6e6e6_1x400.png',
        '/images/ui-icons_454545_256x240.png',
        '/images/ui-icons_888888_256x240.png',
        '/calculator.jpg',
        '/calculator48.png',
        '/calculator128.png',
        '/calculator256.png',
        '/scripts/jax/output/HTML-CSS/fonts/STIX/fontdata.js?V=2.7.1',
        '/scripts/jax/output/HTML-CSS/fonts/TeX/fontdata.js?V=2.7.1',
        '/scripts/jax/output/HTML-CSS/jax.js?V=2.7.1',
        '/scripts/config/TeX-AMS-MML_HTMLorMML.js?V=2.7.1',
        '/scripts/jquery-ui.min.js',
        '/scripts/jquery.min.js',
        '/scripts/MathJax.js?config=TeX-AMS-MML_HTMLorMML',
        '/scripts/md5.js',
        '/scripts/nhpup_1.1.js',
        '/scripts/numeral.min.js',
        '/scripts/page.js',
        '/scripts/rot_calcs.js',
        '/scripts/spreadsheet.js',
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
