$(function(){
  
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
  });

  $('.bottom-slider__inner').slick({
    arrows: false,
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