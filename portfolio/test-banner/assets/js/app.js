const requestURL = "https://solovey.com.ua/test/data.json";
const title = document.querySelector(".banner_title");
const price = document.querySelector(".banner_price");
const img = document.querySelector(".banner_img img");
const img2 = document.querySelector(".banner_img");
const link = document.querySelector(".banner_link");
const order = document.querySelector(".banner_order");

setInterval(() => {
  title.classList.remove("banner_title-active");
  price.classList.remove("banner_price-active");
  img2.classList.remove("banner_img-active");
  order.classList.remove("banner_order-active");
}, 5470);

const addClass = () => {
  title.classList.add("banner_title-active");
  price.classList.add("banner_price-active");
  img2.classList.add("banner_img-active");
  order.classList.add("banner_order-active");
};

const dataFunc = (loop, product, currency) => {
  link.setAttribute("href", `${product[loop].link}`);
  title.innerHTML = product[loop].model;
  price.textContent = `${currency} ${product[loop].price}`;
  img.setAttribute("src", `${product[loop].image_url}`);
};

fetch(requestURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const product = data.sneakers;
    const currency = data.currency;
    let i = 0;
    let j = 1;
    dataFunc(i, product, currency);
    setInterval(() => {
      if (j == product.length) j = 0;
      dataFunc(j, product, currency);
      j++;
      addClass();
    }, 5500);
  })
  .catch(console.error);
