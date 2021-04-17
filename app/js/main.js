$(function(){

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100vh";
  }
  prevScrollpos = currentScrollPos;
}

  $(".product-card__star").rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "13px",
    readOnly: true,
  });

  $('.filter-btn').on('click', function () {
    $(this).siblings().slideToggle();
  });

  $('.button-list').on('click', function () {
    $('.product-list__pagination').addClass('product-list__pagination--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-list__pagination').removeClass('product-list__pagination--list');
  });

  $('.button-list').on('click', function () {
    $('.pagination').addClass('pagination--list');
  });

  $('.button-grid').on('click', function () {
    $('.pagination').removeClass('pagination--list');
  });

  $('.button-list').on('click', function () {
    $('.product-content__item').addClass('product-content__item--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-content__item').removeClass('product-content__item--list');
  });

  $('.button-list').on('click', function () {
    $('.product-card').addClass('product-card--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-card').removeClass('product-card--list');
  });
  
  $('.button-list').on('click', function () {
    $('.circle-btn--white').addClass('circle-btn--square');
  });

  $('.button-grid').on('click', function () {
    $('.circle-btn--white').removeClass('circle-btn--square');
  });
  
  $('.product-content__button').on('click', function () {
    $('.product-content__button').removeClass('product-content__button--active');
    $(this).addClass('product-content__button--active');
  });


  $('.pagination__link').on('click', function () {
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active');
  });

  $(".star").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "6px",
    readOnly: true,
  });

  $('.price-filter__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 0.01,
    onStart: function (data) {
      $('.price-filter__from').text(data.from);
      $('.price-filter__to').text(data.to);
    },
    onChange: function (data) {
      $('.price-filter__from').text(data.from);
      $('.price-filter__to').text(data.to);
    },
  });

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
  

  $('.partners-slider__list').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  });

  var containerEl1 = document.querySelector('[data-ref="products__list"]');
  var containerEl2 = document.querySelector('[data-ref="design__list"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});