$(document).ready(function () {
  // FullPage 초기화
  $("#fullpage").fullpage({
    anchors: ["anchor1", "anchor2", "anchor3"],
    licenseKey: "xxxxxxxxxxxxxxxxxxxxxxxxx", // 라이센스 키는 실제로 발급받은 키로 교체하세요.
    menu: "#menu", // 메뉴가 있는 경우
  });

  $(document).ready(function () {
    // Swiper
    var swiper = new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1920: {
          slidesPerView: 2,
        },
      },
    });
  });
});
