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

setInterval(() => {
  title.classList.add("banner_title-active");
  price.classList.add("banner_price-active");
  img2.classList.add("banner_img-active");
  order.classList.add("banner_order-active");
}, 5500);

fetch(requestURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const product = data.sneakers;
    let i = 0;
    link.setAttribute("href", `${product[i + 5].link}`);
    title.innerHTML = product[i + 5].model;
    price.textContent = `${data.currency} ${product[i + 5].price}`;
    img.setAttribute("src", `${product[i + 5].image_url}`);
    setInterval(() => {
      if (i == product.length) i = 0;
      link.setAttribute("href", `${product[i].link}`);
      title.innerHTML = product[i].model;
      price.textContent = `${data.currency} ${product[i].price}`;
      img.setAttribute("src", `${product[i].image_url}`);
      i++;
    }, 5500);
  })
  .catch(console.error);
