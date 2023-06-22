onVanillaReady(function () {
    // Get access to the root of the header.
    // THIS IS THE CHANGE
    var themeHeader = document.querySelector("#themeHeader").shadowRoot;

    // Find the button.
    var heroImage = themeHeader.querySelector("#hero-image");
    var heroGraphic1 = themeHeader.querySelector("#hero-graphic1");
    var pencilGraphic = themeHeader.querySelector("#pencil-icon");
    var undergradGraphic = themeHeader.querySelector("#undergrad-icon");
    var gradGraphic = themeHeader.querySelector("#grad-icon");
    var proGraphic = themeHeader.querySelector("#pro-icon");
   styleSheet = themeHeader.querySelector("#stylesheet");


    console.log(styleSheet);

    setTimeout(function(){
    var banner = document.documentElement.querySelector('div[class*="Banner-styles-root"]') 
banner.appendChild(heroImage);
banner.appendChild(pencil);
banner.appendChild(heroGraphic2);
banner.appendChild(heroGraphic2);

    var head = document.documentElement.querySelector('head');
    head.appendChild(styleSheet);

    }, 500);


    });
