$(document).ready(function () {
  $(".responsive").owlCarousel({
    items: 1, // Set how many items you want to show at once
    loop: true, // Enable infinite loop
    margin: 10, // Set margin between items
    nav: true,
    dots:false,
  });
});

$(document).ready(function(){
    $(".feature-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      autoplay: true,             // Auto move slides
      autoplayTimeout: 3000,       // Time between slides
      autoplayHoverPause: true,    // Pause on hover
      smartSpeed: 800,             // Smooth speed
      responsive: {
        0: {
          items: 1,
          nav: false,   // Hide arrows on tiny screens (optional)
        },
        600: {
          items: 2,
          nav: true     // Show arrows starting from tablets
        },
        1000: {
          items: 3,
          nav: true,
          loop: true
        }
      }
    });
});

$(document).ready(function(){
    $(".job-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      autoplay: true,             // Auto move slides
      autoplayTimeout: 3000,       // Time between slides
      autoplayHoverPause: true,    // Pause on hover
      smartSpeed: 800,             // Smooth speed
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      }
    });
});
  
$(document).ready(function(){
    $(".testimonial-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      autoplay: true,             // Auto move slides
      autoplayTimeout: 3000,       // Time between slides
      autoplayHoverPause: true,    // Pause on hover
      smartSpeed: 800,             // Smooth speed
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        }
      }
    });
  });
  
