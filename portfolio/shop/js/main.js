function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 8);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var hoursSpan = document.querySelector(".hours");
  var minutesSpan = document.querySelector(".minutes");
  var secondsSpan = document.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock("timer", deadline);

const accordions = document.querySelectorAll(".accordion__btn");
const accordionsIcon = document.querySelectorAll(".accordion__arrow-icon");

accordions.forEach((accordion, i) => {
  accordion.addEventListener("click", (e) => {
    e.preventDefault();
    accordion.classList.toggle("accordion__btn_active");
    accordionsIcon[i].classList.toggle("accordion__arrow-icon_active");

    const accordionPanel = accordion.nextElementSibling;
    if (accordionPanel.classList.contains("accordion__panel_active")) {
      accordionPanel.classList.remove("accordion__panel_active");
      accordionPanel.style.maxHeight = null;
    } else {
      accordionPanel.classList.add("accordion__panel_active");
      accordionPanel.style.maxHeight = accordionPanel.scrollHeight + "px";
    }
  });
});

$(".range").slider({
  min: 0,
  max: 249000,
  values: [1000, 249000],
  range: true,
  animate: "fast",
  slide: function (event, ui) {
    $(".price__range_left").val(ui.values[0]);
    $(".price__range_right").val(ui.values[1]);
  },
});
$(".price__range_left").val($(".range").slider("values", 0));
$(".price__range_right").val($(".range").slider("values", 1));
$(".price__container input").change(function () {
  var input_left = $(".price__range_left")
      .val()
      .replace(/[^0-9]/g, ""),
    opt_left = $(".range").slider("option", "min"),
    where_right = $(".range").slider("values", 1),
    input_right = $(".price__range_right")
      .val()
      .replace(/[^0-9]/g, ""),
    opt_right = $(".range").slider("option", "max"),
    where_left = $(".range").slider("values", 0);
  if (input_left > where_right) {
    input_left = where_right;
  }
  if (input_left < opt_left) {
    input_left = opt_left;
  }
  if (input_left == "") {
    input_left = 0;
  }
  if (input_right < where_left) {
    input_right = where_left;
  }
  if (input_right > opt_right) {
    input_right = opt_right;
  }
  if (input_right == "") {
    input_right = 0;
  }
  $(".price__range_left").val(input_left);
  $(".price__range_right").val(input_right);
  if (input_left != where_left) {
    $(".range").slider("values", 0, input_left);
  }
  if (input_right != where_right) {
    $(".range").slider("values", 1, input_right);
  }
});

const switchChecks = document.querySelectorAll(".switch__input");
const checks = document.querySelectorAll(".switch__label");
const leftChecks = document.querySelectorAll(".catalog__left-check");
const rightChecks = document.querySelectorAll(".catalog__right-check");

checks.forEach((check, i) => {
  check.addEventListener("click", (e) => {
    e.preventDefault();
    switchChecks[i].toggleAttribute("checked");
    leftChecks[i].classList.toggle("active");
    rightChecks[i].classList.toggle("active");
  });
});

leftChecks.forEach((leftCheck, i) => {
  leftCheck.addEventListener("click", (e) => {
    e.preventDefault();
    leftCheck.classList.toggle("active");
    rightChecks[i].classList.toggle("active");
    switchChecks[i].toggleAttribute("checked");
  });
});

rightChecks.forEach((rightCheck, i) => {
  rightCheck.addEventListener("click", (e) => {
    e.preventDefault();
    rightCheck.classList.toggle("active");
    leftChecks[i].classList.toggle("active");
    switchChecks[i].toggleAttribute("checked");
  });
});

const btnFilters = document.querySelectorAll(".btn_large");
const btnCloses = document.querySelectorAll(".close__icon");
btnFilters.forEach((btnFilter) => {
  btnFilter.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".sidebar").classList.add("sidebar_active");
    document.querySelector(".sidebar").classList.add("scroll-on");
    document.querySelector("body").classList.add("scroll-off");
  });
});
btnCloses.forEach((btnClose) => {
  btnClose.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".sidebar").classList.remove("sidebar_active");
    document.querySelector(".sidebar").classList.remove("scroll-on");
    document.querySelector("body").classList.remove("scroll-off");
  });
});

$(".more-stock__slider-list").slick({
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: false,
  prevArrow:
    '<button type="button" class="more-stock__arrow more-stock__arrow_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow:
    '<button type="button" class="more-stock__arrow more-stock__arrow_next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
});
