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

// NAVIGATION LINKS // 
  let navigation = document.querySelectorAll("nav a");



  navigation.forEach((item, i) =>{
    let navContent = siteContent["nav"]
    item.textContent = navContent[`nav-item-${i+1}`];
    item.style.color = "green";
  })

  // append //
  let additionsApp = document.querySelector("nav");
  let newNavia = document.createElement("a");
  newNavia.textContent="-WHO DIS?";
  newNavia.style.color="green";
  additionsApp.append(newNavia);

  // prepend // 

  let additionsPre = document.querySelector("nav");
  let newNavip = document.createElement("a");
  newNavip.textContent="NEW LINK-";
  newNavip.style.color="green";
  additionsPre.prepend(newNavip);

  // there is definitely a better way to do this that i gotta look into //

// LOGO IMAGE SOURCE //
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"]);

// HEADER "DOM IS AWESOME"// 
  let awesomeHeader = document.querySelector("section h1");
  awesomeHeader.textContent = siteContent["cta"].h1;

// CIRCLE IMAGE SOURCE // 
  let ctaImage = document.getElementById("cta-img");
  ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

//MAIN CONTENT//
  // TOP CONTENT //
    const topHeader = document.querySelectorAll('.top-content h4');
    const topcontentTexts = document.querySelectorAll('.top-content p');
    // FEATURES // 
      topHeader[0].textContent = (siteContent['main-content']['features-h4'])
      topcontentTexts[0].textContent = (siteContent['main-content']['features-content'])
      // ABOUT // 
      topHeader[1].textContent = (siteContent['main-content']['about-h4']);
      topcontentTexts[1].textContent = (siteContent['main-content']['about-content']);
  // MIDDLE IMAGE DIVIDER // 
    let middleimg = document.getElementById("middle-img");
    middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

  // BOTTOM CONTENT // 
    const bottomHeader = document.querySelectorAll('.bottom-content h4');
    const bottomcontentTexts = document.querySelectorAll('.bottom-content p');
      // SERVICE // 
        bottomHeader[0].textContent = (siteContent['main-content']['services-h4']);
        bottomcontentTexts[0].textContent = (siteContent['main-content']['services-content']);
      // PRODUCT // 
        bottomHeader[1].textContent = (siteContent['main-content']['product-h4']);
        bottomcontentTexts[1].textContent = (siteContent['main-content']['product-content']);
      // VISION // 
        bottomHeader[2].textContent = (siteContent['main-content']['vision-h4']);
        bottomcontentTexts[2].textContent = (siteContent['main-content']['vision-content']);

// CONTACT //
  const addressFields = document.querySelectorAll('.contact p');
  const contactHeader = document.querySelectorAll('.contact h4');

  contactHeader[0].textContent = (siteContent['contact']['contact-h4']);

  addressFields[0].textContent = (siteContent['contact']['address']);
  addressFields[1].textContent = (siteContent['contact']['phone']);
  addressFields[2].textContent = (siteContent['contact']['email']);
