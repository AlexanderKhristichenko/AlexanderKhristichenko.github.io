$(".carousel__inner").slick({
  speed: 1000,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: `<button type="button" class="slick-prev carousel__btn carousel__btn-prev"><img class="carousel__arrow" src="icons/left-arrow.png" alt="left arrow"></button>`,
  nextArrow: `<button type="button" class="slick-next carousel__btn carousel__btn-next"><img class="carousel__arrow" src="icons/right-arrow.png" alt="right arrow"></button>`,
  dotsClass: "carousel__dots",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots: true,
        arrows: false,
      },
    },
  ],
});

const tabs = document.querySelectorAll(".catalog__tab-item");
const catalogItem = document.querySelectorAll(".catalog-item");
const linkMore = document.querySelectorAll(".catalog-item__link_more");
const linkBack = document.querySelectorAll(".catalog-item__link_back");
const content = document.querySelectorAll(".catalog-item__content");
const listContent = document.querySelectorAll(".catalog-item__list-content");
const btnScrollConsultation = document.querySelector(
  ".button__scroll-consultation"
);
const btnConsultation = document.querySelector(".button__consultation");
const linkCatalog = document.querySelector(".promo__link");
const btnOrders = document.querySelectorAll(".button__order");
const catalogItemTitles = document.querySelectorAll(".catalog-item__title");

$(btnOrders).each(function (i) {
  $(this).on("click", function () {
    $(".modal__subtitle").text($(catalogItemTitles).eq(i).text());
    $(".overlay, .modal__order").fadeIn("slow");
    $("body").addClass("modal-active");
  });
});

btnConsultation.addEventListener("click", (e) => {
  e.preventDefault();
  $(".overlay, .modal__consultation").fadeIn();
  $("body").addClass("modal-active");
});

$(".modal__close").on("click", (e) => {
  e.preventDefault();
  $(".overlay, .modal").fadeOut();
  $("body").removeClass("modal-active");
});

$(btnScrollConsultation).on("click", function (e) {
  e.preventDefault();
  $("html,body")
    .stop()
    .animate({ scrollTop: $(".consultation").offset().top }, 500);
});

$(linkCatalog).on("click", function (e) {
  e.preventDefault();
  $("html,body")
    .stop()
    .animate({ scrollTop: $(".catalog").offset().top }, 500);
});

tabs.forEach((item) => {
  item.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("catalog__tab-item_active");
    });
    if (item.classList.contains("run")) {
      catalogItem.forEach((run) => {
        run.classList.add("catalog-item__hidden");
        if (run.classList.contains("content-run")) {
          run.classList.remove("catalog-item__hidden");
        }
      });
      item.classList.add("catalog__tab-item_active");
    } else if (item.classList.contains("triathlon")) {
      catalogItem.forEach((triathlon) => {
        triathlon.classList.add("catalog-item__hidden");
        if (triathlon.classList.contains("content-triathlon")) {
          triathlon.classList.remove("catalog-item__hidden");
        }
      });
      item.classList.add("catalog__tab-item_active");
    } else {
      catalogItem.forEach((all) => {
        all.classList.remove("catalog-item__hidden");
      });
      item.classList.add("catalog__tab-item_active");
    }
  });
});

linkMore.forEach((moreLink, index) => {
  moreLink.addEventListener("click", (e) => {
    e.preventDefault();
    content[index].classList.remove("catalog-item__content_active");
    listContent[index].classList.add("catalog-item__list-content_active");
  });
});

linkBack.forEach((moreBack, index) => {
  moreBack.addEventListener("click", (e) => {
    e.preventDefault();
    content[index].classList.add("catalog-item__content_active");
    listContent[index].classList.remove("catalog-item__list-content_active");
  });
});

const validetaForm = (formClass) => {
  $(formClass).validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      phone: {
        required: true,
        minlength: 11,
      },
      email: {
        email: true,
      },
    },
    messages: {
      name: "Введите своё имя",
      phone: "Введите свой номер телефона",
      email: {
        required: "Введите свой Email",
        email: "Введите свой Email в формате name@domain.com",
      },
    },
  });
};

validetaForm(".modal__consultation .feed-form");
validetaForm(".modal__order .feed-form");
validetaForm(".consultation .feed-form");

$("input[name=phone]").mask("7 (999) 999-9999");

const submitForm = (nameClass1, nameClass2) => {
  document.querySelectorAll(nameClass1).forEach((formInput) => {
    $(".feed-form .button").click(function (e) {
      if (!$(formInput).hasClass("error")) {
        e.preventDefault();
        $(nameClass1).val("");
        $(nameClass1).removeClass("valid");
        $(nameClass1).addClass("error");
        $(nameClass2).fadeOut();
        $(".overlay, .modal__success")
          .fadeIn()
          .addClass("modal__success_active");
        if ($(".modal__success").hasClass("modal__success_active")) {
          setTimeout(function () {
            $("body").removeClass("modal-active");
            $(".overlay, .modal__success")
              .fadeOut()
              .removeClass("modal__success_active");
          }, 3000);
        }
      }
    });
  });
};

submitForm(".modal__consultation input", ".modal__consultation");
submitForm(".modal__order input", ".modal__order");
submitForm(".consultation input");