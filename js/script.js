window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggle() {
  var menu = document.getElementById("menu");
  var toggle = document.getElementById("toggle");

  menu.classList.toggle("active");
  toggle.classList.toggle("active");
}

var testimonialsSlider = new Swiper(".main__testimonials", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  grabCursor: true,
  effect: "slide",
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
});