/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

(function() {
  'use strict';

  /*
   * TODO 1 - CACHE THE APPLICATION SHELL
   */

  // Beware that index.html may also be requested as /
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
    '/website-template-3/pages/offline.html',
    '/website-template-3/pages/404.html',

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

  var  staticCacheName = 'grecko-cache';

  // When the service worker is registered, an 'install' event is triggered the
  // first time the user visits the page
  self.addEventListener('install', function(event) {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
      caches.open(staticCacheName)
      .then(function(cache) {
        // Takes a list of URLs, then fetches them from the server and adds the
        // response to the cache. This method is atomic and if any of the files
        // fail, the entire cache step fails
        return cache.addAll(filesToCache);
      })
    );
  });

  /*
   * TODO 2 - INTERCEPT NETWORK REQUESTS
   */

  // The fetch event listener intercepts all requests. 
  self.addEventListener('fetch', function(event) {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        // TODO 2.1 - ADD NETWORK RESPONSES TO THE CACHE
        console.log('Network request for ', event.request.url);
        return fetch(event.request).then(function(response) {
          // TODO 2.2 - RESPOND WITH CUSTOM 404 PAGE
          if (response.status === 404) {
            console.log("Page not found");
            return caches.match('pages/404.html');
          }
          return caches.open(staticCacheName).then(function(cache) {
            if (event.request.url.indexOf('test') < 0) {
              cache.put(event.request.url, response.clone());
            }
            return response;
          });
        });
      }).catch(function(error) {
        // Offline fallback image
        if (event.request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
          return new Response('media/error-404.svg');
        }
        /*
        // TODO 2.3 - RESPOND WITH CUSTOM OFFLINE PAGE
        console.log('Error, ', error);
        return caches.match('pages/offline.html');
        */
      })
    );
  });


  /*
   * TODO 3 - DELETE UNUSED CACHES
   */

  // The 'activate' event is fired when the service worker starts up
  self.addEventListener('activate', function(event) {
    console.log('Activating new service worker...');

    var cacheWhitelist = [staticCacheName];

    // Logic to update the cache whenever any of the app shell files change
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });

})();
