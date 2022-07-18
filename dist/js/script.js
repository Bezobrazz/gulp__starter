$(document).ready(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnPrev"><img src="icons/prev.svg" alt="arrow"></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnNext"><img src="icons/next.svg" alt="arrow"></button>',
  });
});
