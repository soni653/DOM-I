const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//nav
let links = document.getElementsByTagName("a");

links[0].innerHTML = siteContent["nav"]["nav-item-1"];
links[1].innerHTML = siteContent["nav"]["nav-item-2"];
links[2].innerHTML = siteContent["nav"]["nav-item-3"];
links[3].innerHTML = siteContent["nav"]["nav-item-4"];
links[4].innerHTML = siteContent["nav"]["nav-item-5"];
links[5].innerHTML = siteContent["nav"]["nav-item-6"];

//color
Array.from(links).forEach(link => {
  link.style.color = "green";
});

//appendChild and Prepand
let newNav1 = document.createElement("a");
let newNav2 = document.createElement("a");
let newText1 = document.createTextNode("Team members");
let newText2 = document.createTextNode("Company");
newNav1.appendChild(newText1);
document.querySelector("nav").appendChild(newNav1);
newNav2.appendChild(newText2);
document.querySelector("nav").prepend(newNav2);
newNav1.style.color = "green";
newNav2.style.color = "green";

//image logo
const logo1 = document.getElementById("cta-img");
logo1.src = "img/header-img.png";
console.log(logo1);
logo1.alt = "great idea";

const logo2 = document.getElementById("middle-img");
logo2.src = "img/mid-page-accent.jpg";

//h1
const texts = document.querySelector("h1");
texts.innerText = "DOM \r\n Is \r\n Awesome";

//button
const btn = document.querySelector("button");
btn.innerText = "Get Started";

//main-content
const h4s = [
  "features-h4",
  "about-h4",
  "services-h4",
  "product-h4",
  "vision-h4"
];
const newh4s = Array.from(document.querySelectorAll("h4"));
for (i = 0; i < newh4s.length; i++) {
  newh4s[i].textContent = siteContent["main-content"][h4s[i]];
}

const paragraph = [
  "features-content",
  "about-content",
  "services-content",
  "product-content",
  "vision-content"
];
const newPara = Array.from(document.querySelectorAll("p"));
for (i = 0; i < newPara.length; i++) {
  newPara[i].textContent = siteContent["main-content"][paragraph[i]];
}

//footer
let info = document.querySelector(".contact");
info.getElementsByTagName("h4")[0].textContent =
  siteContent["contact"]["contact-h4"];
info.getElementsByTagName("p")[0].textContent =
  siteContent["contact"]["address"];
info.getElementsByTagName("p")[1].textContent = siteContent["contact"]["phone"];
info.getElementsByTagName("p")[2].textContent = siteContent["contact"]["email"];

let foot = document.querySelector("footer");
foot.innerText = "Copyright Great Idea! 2020";
