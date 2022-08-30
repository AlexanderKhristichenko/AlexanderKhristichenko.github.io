const requestURL = "https://solovey.com.ua/test/data.json";
const logoLink = "./assets/img/NikeLogo.svg";
const banner = document.querySelector(".banner");

const setAttributes = (el, attrs) => {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};

const addingElements = (product, data) => {
  const link = document.createElement("a");
  setAttributes(link, {
    href: product.link,
    class: "banner_link",
  });
  banner.append(link);

  const logo = document.createElement("img");
  setAttributes(logo, {
    src: logoLink,
    class: "banner_logo",
    alt: "Nike Logo",
  });
  link.append(logo);

  const title = document.createElement("h2");
  title.innerHTML = product.model;
  title.className = "banner_title";
  link.append(title);

  const price = document.createElement("p");
  setAttributes(price, { class: "banner_price btn" });
  price.textContent = `${data.currency} ${product.price}`;
  link.append(price);

  const img = document.createElement("img");
  setAttributes(img, {
    src: product.image_url,
    class: "banner_img",
    alt: product.model,
  });
  link.append(img);

  const order = document.createElement("p");
  setAttributes(order, { class: "banner_order btn" });
  order.textContent = "order now";
  link.append(order);
};

fetch(requestURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let product of data.sneakers) {
      addingElements(product, data);
    }
    let i = 0;
    let j = 1;

    const bannerLink = document.querySelectorAll(".banner_link");
    bannerLink[i].classList.add("banner-active");
    setInterval(() => {
      if (i == bannerLink.length) i = 0;
      if (j == bannerLink.length) j = 0;
      bannerLink[i].classList.remove("banner-active");
      bannerLink[j].classList.add("banner-active");
      i++;
      j++;
    }, 5000);
  })
  .catch(console.error);
