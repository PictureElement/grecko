/* Album page */
var title1 = document.querySelector('#title-1');
var title2 = document.querySelector('#title-2');
var cardFood = document.querySelector('#card-food');
var cardDesserts = document.querySelector('#card-desserts');
var cardDrinks = document.querySelector('#card-drinks');
var cardLocation = document.querySelector('#card-location');
var cardStaff = document.querySelector('#card-staff');
var newsletterForm = document.querySelector('#newsletter-form');
title1.style.opacity = "0";
title2.style.opacity = "0";
cardFood.style.opacity = "0";
cardDesserts.style.opacity = "0";
cardDrinks.style.opacity = "0";
cardLocation.style.opacity = "0";
cardStaff.style.opacity = "0";
newsletterForm.style.opacity = "0";

var options = {
  rootMargin: '0px',
  threshold: 0.2
}

function callback(entries, observer) {
  entries.forEach(function(entry) {
    switch (entry.target.id) {
      case "title-1":
        if (entry.intersectionRatio > 0) {
          title1.style.opacity = "1";
          title1.className += " animated fadeInDown";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "title-2":
        if (entry.intersectionRatio > 0) {
          title2.style.opacity = "1";
          title2.className += " animated fadeInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "card-food":
        if (entry.intersectionRatio > 0) {
          cardFood.style.opacity = "1";
          cardFood.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "card-desserts":
        if (entry.intersectionRatio > 0) {
          cardDesserts.style.opacity = "1";
          cardDesserts.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "card-drinks":
        if (entry.intersectionRatio > 0) {
          cardDrinks.style.opacity = "1";
          cardDrinks.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "card-location":
        if (entry.intersectionRatio > 0) {
          cardLocation.style.opacity = "1";
          cardLocation.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "card-staff":
        if (entry.intersectionRatio > 0) {
          cardStaff.style.opacity = "1";
          cardStaff.className += " animated slideInUp";
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
observer.observe(title1);
observer.observe(title2);
observer.observe(cardFood);
observer.observe(cardDesserts);
observer.observe(cardDrinks);
observer.observe(cardLocation);
observer.observe(cardStaff);
observer.observe(newsletterForm);