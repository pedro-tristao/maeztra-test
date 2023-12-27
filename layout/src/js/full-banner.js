$('.full-banner--desk.slick').slick({
    arrows: true,
    dots: true
});

$('.full-banner--mob.slick').slick({
    arrows: true,
    dots: true,
    responsive: [
        {
          breakpoint: 1050,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          }
        }
       ]
});





