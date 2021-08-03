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
logo.setAttribute('src', siteContent["nav"]["img-src"])

const linksArray = Array.from(document.querySelectorAll('nav a'));
 linksArray[0].textContent = 'Services';
 linksArray[1].textContent = 'Product';
 linksArray[2].textContent = 'Vision';
 linksArray[3].textContent = 'About';
 linksArray[4].textContent = 'Contact';

 const newLine = '\n';
 const picText = document.querySelector('.cta h1');
 picText.textContent = 'DOM Is Awesome';

 const buttonText = document.querySelector('.cta button');
 buttonText.textContent = 'Get Started';

 const bigImg = document.querySelector('#cta-img');
 bigImg.setAttribute('src', siteContent['cta']['img-src']);

 const headers = document.querySelectorAll('.top-content h4');
 const paras = document.querySelectorAll('.top-content p');
 headers[0].textContent = 'Features';
 headers[1].textContent = 'About';

 paras[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
 paras[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

 const midImg = document.querySelector('#middle-img');
 midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

 const bottomHeader = document.querySelectorAll('.bottom-content h4');
 const bottomPara = document.querySelectorAll('.bottom-content p');

 bottomHeader[0].textContent = 'Services';
 bottomHeader[1].textContent = 'Products';
 bottomHeader[2].textContent = 'Vision';

 bottomPara[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
 bottomPara[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
 bottomPara[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

 const contactHeader = document.querySelector('.contact h4');
 contactHeader.textContent = 'Contact';

 const contactInfo = document.querySelectorAll('.contact p');
 contactInfo[0].textContent = '123 Way 456 Street' + newLine + 'Somewhere, USA';
 contactInfo[1].textContent = '1 (888) 888-8888';
 contactInfo[2].textContent = 'sales@greatidea.io';

 const footerDiv = document.querySelector('footer p');
 footerDiv.textContent = 'Copyright Great Idea! 2018';

 

