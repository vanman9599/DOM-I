const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const nav1 = document.querySelectorAll('nav a');
navArray = Array.from(nav1);
for(let i =0;i<navArray.length; i++){
  navArray[i].textContent = siteContent['nav']['nav-item-' + (i+1)];
}


const h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];

const btn = document.querySelector("button");
btn.textContent = siteContent["cta"]["button"];

 const nodeList = document.querySelectorAll(".text-content h4");
 nodeList[0].textContent = siteContent["main-content"]["features-h4"];

const content = document.querySelectorAll(".text-content p");
content[0].textContent = siteContent["main-content"]["features-content"];

nodeList[1].textContent = siteContent["main-content"]["about-h4"];
content[1].textContent = siteContent["main-content"]["about-content"];

nodeList[2].textContent = siteContent["main-content"]["services-h4"];
content[2].textContent = siteContent["main-content"]["services-content"];

nodeList[3].textContent = siteContent["main-content"]["product-h4"];
content[3].textContent = siteContent["main-content"]["product-content"];

nodeList[4].textContent = siteContent["main-content"]["vision-h4"];
content[4].textContent = siteContent["main-content"]["vision-content"];

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactNode = document.querySelectorAll('.contact p');

contactNode[0].textContent = siteContent['contact']['address'];
contactNode[1].textContent = siteContent['contact']['phone'];
contactNode[2].textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

const end = document.createElement("a");
const front = document.createElement("a");

const parent = document.querySelector('header nav');

parent.appendChild(end);
parent.prepend(front);
front.textContent = "Donate";
end.textContent = "FAQ";


const navList = document.querySelectorAll('a');
navList.forEach(function(aTag){
  aTag.style.color = "green";
});
