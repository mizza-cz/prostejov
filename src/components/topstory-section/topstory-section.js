$(".js-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 921,
      settings: {
        arrows: true,
        nextArrow:
          ' <button class="topstory-section__btn topstory-section__btnnext"><svg width="12" height="10" viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 8.145l1.662-1.687a.22.22 0 00.045-.237.214.214 0 00-.197-.134H1.071A1.08 1.08 0 010 5c0-.6.48-1.087 1.071-1.087h6.754a.214.214 0 00.198-.134.22.22 0 00-.047-.237L6.315 1.855a1.098 1.098 0 010-1.537 1.06 1.06 0 011.514 0l3.857 3.914a1.094 1.094 0 010 1.536L7.83 9.682a1.06 1.06 0 01-1.514 0 1.098 1.098 0 010-1.537h-.002z" fill="#fff" fill-rule="nonzero"/></svg></button>',
      },
    },
  ],
});
