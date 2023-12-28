$('.shelf--products.slick').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    centerMode: false,
    dots: false,
    responsive: [
        {
          breakpoint: 1050,
          settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: false,
          centerPadding: '14px',
          slidesToScroll: 1
          }
        }
       ]
});