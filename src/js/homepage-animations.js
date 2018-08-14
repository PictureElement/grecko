/* Homepage */
var foodAnimation = document.querySelector('#food-animation');
var dessertsAnimation = document.querySelector('#desserts-animation');
var drinksAnimation = document.querySelector('#drinks-animation');
var aboutTextAnimation  = document.querySelector('#about-text-animation');
var aboutBtnAnimation = document.querySelector('#about-btn-animation');
var card1Animation = document.querySelector('#card-1-animation');
var card2Animation = document.querySelector('#card-2-animation');
var card3Animation = document.querySelector('#card-3-animation');
foodAnimation.style.opacity = "0";
dessertsAnimation.style.opacity = "0";
drinksAnimation.style.opacity = "0";
aboutTextAnimation.style.opacity = "0";
aboutBtnAnimation.style.opacity = "0";
card1Animation.style.opacity = "0";
card2Animation.style.opacity = "0";
card3Animation.style.opacity = "0";

var options = {
  rootMargin: '0px',
  threshold: 0.3
}

function callback(entries, observer) {
  entries.forEach(function(entry) {
    switch (entry.target.id) {
      case "food-animation":
        if (entry.intersectionRatio > 0) {
          foodAnimation.style.opacity = "1";
          foodAnimation.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "desserts-animation":
        if (entry.intersectionRatio > 0) {
          dessertsAnimation.style.opacity = "1";
          dessertsAnimation.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "drinks-animation":
        if (entry.intersectionRatio > 0) {
          drinksAnimation.style.opacity = "1";
          drinksAnimation.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "about-text-animation":
        if (entry.intersectionRatio > 0) {
          aboutTextAnimation.style.opacity = "1";
          aboutTextAnimation.className += " animated fadeInDown";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "about-btn-animation":
        if (entry.intersectionRatio > 0) {
          aboutBtnAnimation.style.opacity = "1";
          aboutBtnAnimation.className += " animated fadeInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "card-1-animation":
        if (entry.intersectionRatio > 0) {
          card1Animation.style.opacity = "1";
          card1Animation.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "card-2-animation":
        if (entry.intersectionRatio > 0) {
          card2Animation.style.opacity = "1";
          card2Animation.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "card-3-animation":
        if (entry.intersectionRatio > 0) {
          card3Animation.style.opacity = "1";
          card3Animation.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
    }
  });
}

// Create an intersection observer
var observer = new IntersectionObserver(callback, options);

// Start observing 
observer.observe(foodAnimation);
observer.observe(dessertsAnimation);
observer.observe(drinksAnimation);
observer.observe(aboutTextAnimation);
observer.observe(aboutBtnAnimation);
observer.observe(card1Animation);
observer.observe(card2Animation);
observer.observe(card3Animation);