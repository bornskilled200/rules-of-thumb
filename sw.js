this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/rules-of-thumb/',
        '/rules-of-thumb/rulesofthumb.css',
        '/rules-of-thumb/index.html',
        '/rules-of-thumb/jquery-ui.css',
        '/rules-of-thumb/images/new.png',
        '/rules-of-thumb/images/ui-bg_flat_75_ffffff_40x100.png',
        '/rules-of-thumb/images/ui-bg_glass_65_ffffff_1x400.png',
        '/rules-of-thumb/images/ui-bg_glass_75_e6e6e6_1x400.png',
        '/rules-of-thumb/images/ui-icons_454545_256x240.png',
        '/rules-of-thumb/images/ui-icons_888888_256x240.png',
        '/rules-of-thumb/calculator.png',
        '/rules-of-thumb/calculator48.png',
        '/rules-of-thumb/calculator128.png',
        '/rules-of-thumb/calculator256.png',
        '/rules-of-thumb/scripts/jax/output/HTML-CSS/fonts/STIX/fontdata.js?V=2.7.1',
        '/rules-of-thumb/scripts/jax/output/HTML-CSS/fonts/TeX/fontdata.js?V=2.7.1',
        '/rules-of-thumb/scripts/jax/output/HTML-CSS/jax.js?V=2.7.1',
        '/rules-of-thumb/scripts/config/TeX-AMS-MML_HTMLorMML.js?V=2.7.1',
        '/rules-of-thumb/scripts/jquery-ui.min.js',
        '/rules-of-thumb/scripts/jquery.min.js',
        '/rules-of-thumb/scripts/MathJax.js?config=TeX-AMS-MML_HTMLorMML',
        '/rules-of-thumb/scripts/md5.js',
        '/rules-of-thumb/scripts/nhpup_1.1.js',
        '/rules-of-thumb/scripts/numeral.min.js',
        '/rules-of-thumb/scripts/page.js',
        '/rules-of-thumb/scripts/rot_calcs.js',
        '/rules-of-thumb/scripts/spreadsheet.js',
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
