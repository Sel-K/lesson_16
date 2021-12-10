$(document).ready(function(){
  //Слайдер в блоке отеля
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
  //Слайдер в отзывах
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
  //Паралакс эффект
  $('.newsletter').parallax({
    imageSrc: 'img/bgimage-newsletter.webp',
    speed: 0.6,
  });
  //открытие бургера менюшки
  var menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', function(){
    //console.log('clik!!');
    document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
  });
//модально окно отслеживает тогл на кнопке
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
    modalButton.on("click", openModal);
    closeModalButton.on("click", closeModal);//для закрытия модального окна нажатие по крестику

    //Для открытия модального окна
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }
//Для закрытия модального окна
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  //Закрытие по нажатии на пустое поле
  var hideModal = document.querySelector('.modal__overlay');
  hideModal.addEventListener('click', function(){
    //console.log('clik!!');
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  });

  //обработка форм (jquery.validate)
  $(".form").each(function(){
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
          minlength: 11,
        }
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlenght: "Name must be at least 2 letters long"
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Please enter your phone number",
          minlenght: "The field must contain 11 digits",
          phone: "Please use numbers only"
        },
      }
    });
  });

  //Маска для номеров телефонов и типа подсказка поля
  $(document).ready(function(){
    $('.tel').mask('+7(999) 999-99-99');
  });

  //Ограничение для инпута имени не более 25 знаков
  $(document).ready(function () {
    $(".name").attr('maxlength', '25');    
  });

  //Подключение анимации на определенный размер окна
  AOS.init({
    disable: function() {
      var maxWidth = 990; //указан максимальный размер экрана
      return window.innerWidth < maxWidth; //если размер меньше, то возвращает настройки
    }
    
  });
  
});
