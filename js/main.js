// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
let header = document.getElementById("header");
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    header.classList.remove("active");
  }
};
// menu end

// scroll start
function scrollFunc() {
  if (window.pageYOffset >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end

// slider
const countFunc = (slider, i, length) => {
  return i + 1 + " " + "/" + " " + Math.ceil(slider.slideCount / length);
};
var $status = $(".pagingInfo");
$(".rooms__inner-slider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    arrows: true,
    speed: 800,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
    dots: true,
    dotsClass: "custom_paging",
    customPaging: (slider, i) => countFunc(slider, i, 3),
    responsive: [
      {
        breakpoint: 931,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 700,
          customPaging: (slider, i) => countFunc(slider, i, 2),
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 600,
          customPaging: (slider, i) => countFunc(slider, i, 1),
        },
      },
    ],
  });
});

