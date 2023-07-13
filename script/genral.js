onVanillaReady(function () {
    // Get access to the root of the header.
    // THIS IS THE CHANGE
    var themeHeader = document.querySelector("#themeHeader").shadowRoot;

    

    // Find the button.
 //   var heroImage = themeHeader.querySelector("#hero-image");
  //  var heroGraphic1 = themeHeader.querySelector("#hero-graphic1");
  //  var heroGraphic2 = themeHeader.querySelector("#hero-graphic2");
  //  var cardGraphic = themeHeader.querySelector("#card-graphic");
   styleSheet = themeHeader.querySelector("#stylesheet");



    setTimeout(function(){
    var banner = document.documentElement.querySelector('div[class*="Banner-styles-root"]') 

    var head = document.documentElement.querySelector('head');
    head.appendChild(styleSheet);

    }, 0001);





    });


