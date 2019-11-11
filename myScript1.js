var myJSButton =  document.getElementById("HTMLButton");
window.onscroll = function () {
    'use strict';
    if (window.pageYOffset >= 400) {
    myJSButton.style.display = 'block';
    } else {
    myJSButton.style.display = 'none';
    }
}
myJSButton.onclick = function () {
    'use strict';
    window.scrollTo(0,0) ;
}