// Add FOUC prevention class immediately
document.documentElement.classList.add('js-fouc');

onVanillaReady(function() {
    // Get access to the root of the header.
    var themeHeader = document.querySelector("#themeHeader").shadowRoot;
    styleSheet = themeHeader.querySelector("#stylesheet");

    // Create a promise to handle style loading
    const styleLoadPromise = new Promise((resolve) => {
        setTimeout(function() {
            var banner = document.documentElement.querySelector('div[class*="Banner-styles-root"]');
            var head = document.documentElement.querySelector('head');
            head.appendChild(styleSheet);
            
            // Wait for styles to be applied
            requestAnimationFrame(() => {
                resolve();
            });
        }, 1);
    });

    // Remove FOUC class after styles are loaded
    styleLoadPromise.then(() => {
        document.documentElement.classList.remove('js-fouc');
    });

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