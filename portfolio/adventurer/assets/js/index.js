!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18);var o=document.querySelectorAll(".rating__percent"),r=document.querySelectorAll(".acordeon__button"),c=document.querySelectorAll(".acordeon__text");$("head").append("<link rel='stylesheet' type='text/css' href='//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' />"),$("head").append("<link rel='stylesheet' type='text/css' href='./assets/css/index.css' />"),$(".header-slider").slick({dots:!1,infinite:!0,speed:500,fade:!0,cssEase:"linear",autoplay:!0,autoplaySpeed:3e3}),$(".customer__slider").slick({arrows:!1,infinite:!0,speed:500,autoplay:!0,autoplaySpeed:3e3,dots:!0}),$(".slick-arrow").html(""),$(".slick-dots li").html("");for(var i=0;i<o.length;i++)o[i].style.width=o[i].dataset.percent+"%";for(var u=function(e){r[e].addEventListener("click",(function(t){if(t.preventDefault(),!this.classList.contains("acordeon__button--active")){for(var n=0;n<r.length;n++)r[n].classList.remove("acordeon__button--active"),$(c[n]).slideUp();this.classList.add("acordeon__button--active"),$(c[e]).slideDown()}}))},l=0;l<r.length;l++)u(l);$(".nav__btn").click((function(e){e.preventDefault(),$(".nav__list").slideToggle(500)}));var s=document.querySelectorAll("body div");$(s[110]).remove(),[].forEach.call(document.querySelectorAll("img[data-src]"),(function(e){e.setAttribute("src",e.getAttribute("data-src")),e.onload=function(){e.removeAttribute("data-src")}}))},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){}]);