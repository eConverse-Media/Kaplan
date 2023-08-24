onVanillaReady(function () {

  var themeHeader = document.querySelector("#themeHeader").shadowRoot;
  var styleSheet = themeHeader.querySelector("style").innerHTML;
  const styleTag = document.createElement('style');
  styleTag.setAttribute('type', 'text/css');
  styleTag.setAttribute('innerHTML', styleSheet);
  setTimeout(()=>{
  var whoonlineWidget = window.document.querySelector('ul[class*="Online"]'); 
   whoonlineWidget.closest('.panelWidget').classList.add('who-online-style');

   if(sidebarArr[i].firstChild !== null) {
    if(sidebarArr[i].firstChild.classList.length === 0) {
     const htmlParent = sidebarArr[i].firstChild.closest('.panelWidget');
     htmlParent.classList.add('html-parent');
    } 
  }
  }, 500);



   });

(function(c,l,a,r,i,t,y){
 c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
 t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
 y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);t.setAttribute('nonce', y.nonce);
})(window, document, "clarity", "script", "i2a86fy9n1");

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 'https://www.googletagmanager.com/gtm.js?id='+i+dl;j.setAttribute('nonce', f.nonce);f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5GGQRCQG');

