(function() {

  // Smooth scrolling functionality
  document.querySelectorAll('.smooth-scroll').forEach(function(anchor) {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      });
    });
  });

  // Back to top button show/hide
  var $backToTop = $('#back-to-top');
  var offset = 2000;
  var duration = 400;

  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $backToTop.fadeIn(duration);
    } else {
      $backToTop.fadeOut(duration);
    }
  });

  // Disable mouse zoom scrolling on Google Map by default
  var $googleMapContainer = $('#googleMapContainer');

  $googleMapContainer.on('click', function() {
    $(this).find('iframe').addClass('enable-zoom-scrolling');
  });

  $googleMapContainer.on('mouseleave', function() {
    $(this).find('iframe').removeClass('enable-zoom-scrolling');
  });

})();
