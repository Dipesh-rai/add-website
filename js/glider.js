$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 500,
  cssEase: 'linear',
  arrows: true, // KEEP THIS TRUE to use custom arrows below
  prevArrow: '<button type="button" class="slick-prev custom-arrow"></button>',
  nextArrow: '<button type="button" class="slick-next custom-arrow"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 1 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 }
    }
  ]
});
$('.home-carousel').slick({
  slidesToShow: 3,
  slidestoscroll:1,
  dots: true,
  infinite: true,
  speed: 500,
  cssEase: 'linear',
  arrows: true, // KEEP THIS TRUE to use custom arrows below
  prevArrow: '<button type="button" class="slick-prev custom-arrow"></button>',
  nextArrow: '<button type="button" class="slick-next custom-arrow"></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 }
    }
  ]
});
$('.apartment-carousel').slick({
  slidesToShow: 3,
  slidestoscroll:1,
  dots: true,
  infinite: true,
  speed: 500,
  cssEase: 'linear',
  arrows: true, // KEEP THIS TRUE to use custom arrows below
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 }
    }
  ]
});

$('.testimonial-carousel').slick({
  slidesToShow: 2,
  slidestoscroll:1,
  infinite: true,
  speed: 500,
  cssEase: 'linear',
  arrows: true, // KEEP THIS TRUE to use custom arrows below
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 2}
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2}
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 2 }
    }
  ]
});