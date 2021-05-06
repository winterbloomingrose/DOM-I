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

/* Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]) */

/* Thank you 
https://www.w3schools.com/jsref/met_element_queryselectorall.asp 
https://www.textcompare.org/html/ */

// LINES 20-25 // 
  let navigation = document.querySelectorAll("nav a");
  navigation.forEach((item, i) =>{
    let navContent = siteContent["nav"]
    item.textContent = navContent[`nav-item-${i+1}`];
  })

// LINE 28 //
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"]);

// LINES 33-34// 
  let awesomeHeader = document.querySelector("section h1");
  awesomeHeader.textContent = siteContent["cta"].h1;

// LINE 36 // 
  let ctaImage = document.getElementById("cta-img");
  ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

// LINES 43-46 // 
  const featuresHeader = document.querySelectorAll('.top-content h4');
  featuresHeader[0].textContent = (siteContent['main-content']['features-h4'])

  const featuresParagraph = document.querySelectorAll('.top-content p');
  featuresParagraph[0].textContent = (siteContent['main-content']['features-content'])

// LINES 49 - 52// 
  const aboutHeader = document.querySelectorAll('.top-content h4');
  aboutHeader[1].textContent = (siteContent['main-content']['about-h4'])

  const aboutParagraph = document.querySelectorAll('.top-content p');
  aboutParagraph[1].textContent = (siteContent['main-content']['about-content'])
  
// line 56-57 // 
  e
// line 61- 64 // 
  e
// line 67-70 // 
  e
// line 73-76// 
  e
// line 84// 
  e
// line 86-87//
  e
// line 89 // 
  e
// line 91 // 
  e
// line 96 //  
  e

/* 6/15 complete */