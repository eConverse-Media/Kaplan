onVanillaReady(function() {
    // Get access to the root of the header.
    // THIS IS THE CHANGE
    var themeHeader = document.querySelector("#themeHeader").shadowRoot;



    // Find the button.
    //   var heroImage = themeHeader.querySelector("#hero-image");
    //  var heroGraphic1 = themeHeader.querySelector("#hero-graphic1");
    //  var heroGraphic2 = themeHeader.querySelector("#hero-graphic2");
    //  var cardGraphic = themeHeader.querySelector("#card-graphic");
    styleSheet = themeHeader.querySelector("#stylesheet");



    setTimeout(function() {
        var banner = document.documentElement.querySelector('div[class*="Banner-styles-root"]')

        var head = document.documentElement.querySelector('head');
        head.appendChild(styleSheet);
        


    }, 1);

    /* var cognitoUrl = "https://stg-kaplan-community.auth.us-east-2.amazoncognito.com/page?client_id=4vtk6qm9a0vi5tm1tb94d8176e&redirect_uri=https%3A%2F%2Fkaplanhub.vanillastaging.com%2Fkaplancommunity%2Fentry%2Foauth2&scope=email+openid&response_type=code&state=";
    if(window.location.href.indexOf('/entry/signin') > -1) {
        var params = new URL(document.location.toString()).searchParams;
        var target = params.get("target");
        var target = params.get("admin");
        console.log('target', target);
        if(target) {
            var encodedString = encodeURIComponent(btoa({"target":"\/entry\/signin?target="+target}));
            window.location.href = cognitoUrl.replace("page", "login") + encodedString;
            return;
        }
    } */

    //Move OptIn Language from center to bottom of the page
    if (window.location.href.indexOf('/entry/register') > -1) {
        var list = document.getElementsByTagName("ul")[1];
        var items = list.getElementsByTagName("li");
        var firstItem = items[10];
        var secondItem = items[14];
        list.insertBefore(firstItem, secondItem.nextSibling);
    }
    relayJS();
});

var cognitoUrl = "https://kaplanhub.vanillastaging.com/kaplancommunity/entry/oauth2-redirect?client_id=4vtk6qm9a0vi5tm1tb94d8176e&state=";
if(window.location.href.indexOf('/entry/signin') > -1) {
    var params = new URL(window.location.href.toString()).searchParams;
    var target = params.get("target");
    var admin = params.get("admin");
    console.log('target', target);
    if(target) {
        const targetObj = {target:"\/entry\/signin?target="+encodeURIComponent(target)};
        targetObj.target = targetObj.target.replace(/\//g, '\\/');
        // Convert the object back to a JSON string
        const updatedJsonString = `{"target":"${targetObj.target}"}`;
        const base64Ecoded = btoa(updatedJsonString);
        var encodedString = encodeURIComponent(base64Ecoded);
        //window.location.href = cognitoUrl + encodedString;
        console.log(cognitoUrl + encodedString);
    }
}

function relayJS() {
    if (typeof window === 'undefined') return;
    if (typeof window.signals !== 'undefined') return;
    var script = document.createElement('script');
    script.src = 'https://cdn.cr-relay.com/v1/site/3bb5941f-6be2-4e1c-97f1-ba9472f4751a/signals.js';
    script.async = true;
    window.signals = Object.assign(
    [],
    ['page', 'identify', 'form'].reduce(function (acc, method){
    acc[method] = function () {
    signals.push([method, arguments]);
    return signals;
    };
    return acc;
    }, {})
    );
    document.head.appendChild(script);
}