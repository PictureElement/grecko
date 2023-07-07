/* Reservations page */
var title1 = document.querySelector('#title-1');
var title2 = document.querySelector('#title-2');
var description = document.querySelector('#description');
var newsletterForm = document.querySelector('#newsletter-form');
title1.style.opacity = "0";
title2.style.opacity = "0";
description.style.opacity = "0";
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
      case "description":
        if (entry.intersectionRatio > 0) {
          description.style.opacity = "1";
          description.className += " animated fadeInUp";
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
observer.observe(description);
observer.observe(newsletterForm);