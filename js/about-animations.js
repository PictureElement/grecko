/* About page */
var title1 = document.querySelector('#title-1');
var title2 = document.querySelector('#title-2');
var historyDescription = document.querySelector('#history-description');
var jobDescription = document.querySelector('#job-description');
var newsletterForm = document.querySelector('#newsletter-form');
title1.style.opacity = "0";
title2.style.opacity = "0";
historyDescription.style.opacity = "0";
jobDescription.style.opacity = "0";
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
      case "history-description":
        if (entry.intersectionRatio > 0) {
          historyDescription.style.opacity = "1";
          historyDescription.className += " animated slideInRight";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "job-description":
        if (entry.intersectionRatio > 0) {
          jobDescription.style.opacity = "1";
          jobDescription.className += " animated slideInRight";
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
observer.observe(historyDescription);
observer.observe(jobDescription);
observer.observe(newsletterForm);