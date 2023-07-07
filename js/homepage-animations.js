/* Homepage */
var food = document.querySelector('#food');
var desserts = document.querySelector('#desserts');
var drinks = document.querySelector('#drinks');
var aboutDescription  = document.querySelector('#about-description');
var card1 = document.querySelector('#card-1');
var card2 = document.querySelector('#card-2');
var card3 = document.querySelector('#card-3');
var newsletterForm = document.querySelector('#newsletter-form');
food.style.opacity = "0";
desserts.style.opacity = "0";
drinks.style.opacity = "0";
aboutDescription.style.opacity = "0";
card1.style.opacity = "0";
card2.style.opacity = "0";
card3.style.opacity = "0";
newsletterForm.style.opacity = "0";

var options = {
  rootMargin: '0px',
  threshold: 0.2
}

function callback(entries, observer) {
  entries.forEach(function(entry) {
    switch (entry.target.id) {
      case "food":
        if (entry.intersectionRatio > 0) {
          food.style.opacity = "1";
          food.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "desserts":
        if (entry.intersectionRatio > 0) {
          desserts.style.opacity = "1";
          desserts.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "drinks":
        if (entry.intersectionRatio > 0) {
          drinks.style.opacity = "1";
          drinks.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "about-description":
        if (entry.intersectionRatio > 0) {
          aboutDescription.style.opacity = "1";
          aboutDescription.className += " animated fadeInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "card-1":
        if (entry.intersectionRatio > 0) {
          card1.style.opacity = "1";
          card1.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "card-2":
        if (entry.intersectionRatio > 0) {
          card2.style.opacity = "1";
          card2.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "card-3":
        if (entry.intersectionRatio > 0) {
          card3.style.opacity = "1";
          card3.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "newsletter-form":
        if (entry.intersectionRatio > 0) {
          newsletterForm.style.opacity = "1";
          newsletterForm.className += " animated fadeInUp";
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
observer.observe(food);
observer.observe(desserts);
observer.observe(drinks);
observer.observe(aboutDescription);
observer.observe(card1);
observer.observe(card2);
observer.observe(card3);
observer.observe(newsletterForm);