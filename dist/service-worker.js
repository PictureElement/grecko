var  cacheName = 'grecko-cache';

// Beware that index.html may also be requested as (/)
var filesToCache = [
  '/website-template-3/',
  '/website-template-3/about.html',
  '/website-template-3/album.html',
  '/website-template-3/contact.html',
  '/website-template-3/desserts.html',
  '/website-template-3/drinks.html',
  '/website-template-3/food.html',
  '/website-template-3/gallery-desserts.html',
  '/website-template-3/gallery-drinks.html',
  '/website-template-3/gallery-food.html',
  '/website-template-3/gallery-location.html',
  '/website-template-3/gallery-staff.html',
  '/website-template-3/reservations.html',

  '/website-template-3/js/about-animations.js',
  '/website-template-3/js/album-animations.js',
  '/website-template-3/js/contact-animations.js',
  '/website-template-3/js/gallery-animations.js',
  '/website-template-3/js/homepage-animations.js',
  '/website-template-3/js/lazysizes.min.js',
  '/website-template-3/js/menu-animations.js',
  '/website-template-3/js/reservations-animations.js',
  '/website-template-3/js/site.js',

  '/website-template-3/css/animate.css',
  '/website-template-3/css/bootstrap.css',
  '/website-template-3/css/main.css',

  '/website-template-3/brand/logo-dark.svg',
  '/website-template-3/brand/logo-light.svg',

  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
  'https://fonts.googleapis.com/css?family=Fredericka+the+Great',
  'https://code.jquery.com/jquery-3.3.1.min.js',
  'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
];

// When the service worker is registered, an 'install' event is triggered the
// first time the user visits the page
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    // Open cache
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      // Takes a list of URLs, then fetches them from the server and adds the
      // response to the cache. This method is atomic and if any of the files
      // fail, the entire cache step fails
      return cache.addAll(filesToCache);
    })
  );
});

// The 'activate' event is fired when the service worker starts up
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  // Logic to update the cache whenever any of the app shell files change
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

// We've cached the app shell components, but we still need to load them from
// the local cache.
self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    // Evaluate the web request to see if it's available in the cache. It then
    // either responds with the cached version, or uses fetch to get a copy from
    // the network. The response is passed back to the web page with
    // e.respondWith().
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});