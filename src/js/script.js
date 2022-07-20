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
  $(".tab").on("click", function (e) {
    e.preventDefault();

    $(".tab").removeClass("tab--active");
    $(".tabs-content").removeClass("tabs-content--active");

    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");
  });

  // Favorites
  $(".poduct-item__favorite").on("click", function (e) {
    e.preventDefault();

    $(".poduct-item__favorite").toggleClass("poduct-item__favorite--active");
  });
});
