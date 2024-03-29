$(".js-scoreboard").slick({
  initialSlide: 2,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow:
    ' <button class="slider__btn  slider__btnnext"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="368" height="448" viewBox="0 0 368 448"><title></title><g id="icomoon-ignore"></g><path d="M368 240c0 8.5-3.25 16.75-9.25 22.75l-162.75 162.75c-6 5.75-14.25 9.25-22.75 9.25s-16.5-3.5-22.5-9.25l-18.75-18.75c-6-6-9.5-14.25-9.5-22.75s3.5-16.75 9.5-22.75l73.25-73.25h-176c-18 0-29.25-15-29.25-32v-32c0-17 11.25-32 29.25-32h176l-73.25-73.5c-6-5.75-9.5-14-9.5-22.5s3.5-16.75 9.5-22.5l18.75-18.75c6-6 14-9.5 22.5-9.5s16.75 3.5 22.75 9.5l162.75 162.75c6 5.75 9.25 14 9.25 22.5z"></path></svg></button>',
  prevArrow:
    ' <button class="slider__btn  slider__btnprev"><?xml version="1.0" encoding="UTF-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400" height="448" viewBox="0 0 400 448"><title></title><g id="icomoon-ignore"></g><path d="M384 224v32c0 17-11.25 32-29.25 32h-176l73.25 73.5c6 5.75 9.5 14 9.5 22.5s-3.5 16.75-9.5 22.5l-18.75 19c-5.75 5.75-14 9.25-22.5 9.25s-16.75-3.5-22.75-9.25l-162.75-163c-5.75-5.75-9.25-14-9.25-22.5s3.5-16.75 9.25-22.75l162.75-162.5c6-6 14.25-9.5 22.75-9.5s16.5 3.5 22.5 9.5l18.75 18.5c6 6 9.5 14.25 9.5 22.75s-3.5 16.75-9.5 22.75l-73.25 73.25h176c18 0 29.25 15 29.25 32z"></path></svg></button>',
  responsive: [
    {
      breakpoint: 1340,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});
