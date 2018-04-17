/*
$("#menu-animation").css("opacity", "0");
$("#about-us-animation").css("opacity", "0");
$("#delivery-animation").css("opacity", "0");
$("#testimonials-animation").css("opacity", "0");
*/
$("#reservations-description").css("opacity", "0");

var options = {
  rootMargin: '0px',
  threshold: 0.5
}

function callback (entries, observer) {
    entries.forEach(function(entry) {
      switch (entry.target.id) {
        case "menu-animation":
          if (entry.intersectionRatio > 0) {
            $("#menu-animation").css("opacity", "1");
            $("#food").addClass("animated fadeInUp");
            $("#deserts").addClass("animated fadeInUp");
            $("#drinks").addClass("animated fadeInUp");
            // Stop observing target
            observer.unobserve(entry.target);
          }
          break;
        case "about-us-animation":
          if (entry.intersectionRatio > 0) {
            $("#about-us-animation").css("opacity", "1");
            $("#about-us-animation h2").addClass("animated fadeInUp");
            $("#about-us-animation h3").addClass("animated fadeInUp");
            $("#about-us-animation p").addClass("animated fadeInUp");
            $("#about-us-animation a").addClass("animated fadeInUp");
            // Stop observing target
            observer.unobserve(entry.target);
          }
          break;
        case "delivery-animation":
          if (entry.intersectionRatio > 0) {
            $("#delivery-animation").css("opacity", "1");
            $("#delivery-animation h2").addClass("animated fadeInUp");
            $("#delivery-animation h3").addClass("animated fadeInUp");
            $("#card-1").addClass("animated fadeInUp");
            $("#card-2").addClass("animated fadeInUp");
            $("#card-3").addClass("animated fadeInUp");
            // Stop observing target
            observer.unobserve(entry.target);
          }
          break;
        case "testimonials-animation":
          if (entry.intersectionRatio > 0) {
            $("#testimonials-animation").css("opacity", "1");
            $("#testimonials-animation h2").addClass("animated fadeInUp");
            $("#testimonials-animation h3").addClass("animated fadeInUp");
            $("#test-carousel").addClass("animated fadeInUp");
            // Stop observing target
            observer.unobserve(entry.target);
          }
          break;
        case "reservations-description":
          if (entry.intersectionRatio > 0) {
            $("#reservations-description").css("opacity", "1");
            $("#reservations-description h2").addClass("animated fadeInUp");
            $("#reservations-description h3").addClass("animated fadeInUp");
            $("#reservations-description p").addClass("animated fadeInUp");
            // Stop observing target
            observer.unobserve(entry.target);
          }
          break;
      }
    });
}

var observer = new IntersectionObserver(callback, options);

/*
observer.observe(document.querySelector("#menu-animation"));
observer.observe(document.querySelector("#about-us-animation"));
observer.observe(document.querySelector("#delivery-animation"));
observer.observe(document.querySelector("#testimonials-animation"));
*/
observer.observe(document.querySelector("#reservations-description"));