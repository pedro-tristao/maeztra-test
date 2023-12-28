$('.partner--container--slick-mob').slick({
    infinite: false,
    arrows: false,
    centerMode: true,
    centerPadding: '5vw',
    slidesToShow: 1,
    mobileFirst: true,
    responsive: [
        {
           breakpoint: 1050,
           settings: "unslick"
        }
    ]
  });