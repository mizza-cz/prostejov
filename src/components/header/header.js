headerNavOpenerClick();
function headerNavOpenerClick() {
  const bodyEl = document.querySelector("body");
  const headerNavOpener = document.querySelector(".js-header__opener");
  if (!bodyEl || !headerNavOpener) {
    return;
  }
  headerNavOpener.addEventListener("click", function () {
    if (!this.classList.contains("is-open")) {
      bodyEl.classList.add("is-nav-open");
      this.classList.add("is-open");
    } else {
      bodyEl.classList.remove("is-nav-open");
      this.classList.remove("is-open");
    }
  });
}
var e,
  t = window.location.hash;
"" != t &&
  (e = $("a[name='" + t + "']")).length &&
  $("html,body").animate({ scrollTop: e.offset().top }, "slow"),
  $(window).bind("scroll", function () {
    32 < $(window).scrollTop()
      ? $(".header").addClass("fixed")
      : $(".header").removeClass("fixed");
  });
