var hotelSlider = new Swiper('.hotel-slider', {
    loop: true,
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
  },
    effect: 'flip',
  });
  var reviewsSlider = new Swiper('.reviews-slider', {
    loop: true,
    effect: 'flip',
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
  },
  });
  $('.newsletter').parallax({
    imageSrc: 'img/bgimage-newsletter.jpg',
    speed: 0.6,
  });
  var menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', function(){
    console.log('clik!!');
    document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
  });