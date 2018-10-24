(function() {

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      });
    });
  });

  // Back to top hide/show
  var $backToTop = $('#back-to-top');

  var offset = 2000;
  var duration = 400;

  $(window).scroll(function() {
    if($(this).scrollTop() > offset) {
      $backToTop.fadeIn(duration);
    }
    else {
      $backToTop.fadeOut(duration);
    }
  });

  // Disable mouse zoom scrolling on Google Map by default
  var $googleMapContainer = $('#googleMapContainer');

  $googleMapContainer.click(function() {
    $(this).find('iframe').addClass('enable-zoom-scrolling');
  });

  $googleMapContainer.mouseleave(function() {
    $(this).find('iframe').removeClass('enable-zoom-scrolling');
  });

  // Service worker registration
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/website-template-3/service-worker.js', {scope: '/website-template-3/'})
      .then(function(registration) {
        console.log('Service Worker registration successful with scope: ',
        registration.scope);
      })
      .catch(function(err) {
        console.log('Service Worker registration failed: ', err);
      });
  }

})();