$(document).ready(function () {
  //SLick slider
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnPrev"><img src="icons/prev.svg" alt="arrow"></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnNext"><img src="icons/next.svg" alt="arrow"></button>',
  });

  //Tabs
  $(".search__tabs-item").on("click", function (e) {
    e.preventDefault();

    $(".search__tabs-item").removeClass("search__tabs-item--active");
    $(".search__content-item").removeClass("search__content-item--active");

    $(this).addClass("search__tabs-item--active");
    $($(this).attr("href")).addClass("search__content-item--active");
  });
});
