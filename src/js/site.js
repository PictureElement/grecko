(function() {

  // Smooth scrolling
  document.querySelectorAll('.smooth-scroll').forEach(function(anchor) {
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

})();