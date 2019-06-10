 	var fileref = document.createElement("link");
 	fileref.setAttribute("rel", "stylesheet");
 	fileref.setAttribute("type", "text/css");
 	document.getElementsByTagName("head")[0].appendChild(fileref);
 	var adChecked = false;
 	var attempts = 5;
 	var cntAttempts = 0;
 	var adInterval;

 	function checkAd() {
 	    if (adChecked || cntAttempts >= attempts) {
 	        clearInterval(adInterval);
 	        return;
 	    }

 	    cntAttempts++;

 	    var carbonImg = document.querySelector('.carbon-img');

 	    if (!carbonImg) return;

 	    var adImgHeight = carbonImg.offsetHeight;

 	    if (adImgHeight >= 30) {
 	        _gaq.push(['_trackEvent', 'Codrops Demo Ad', 'Carbon Ad VISIBLE', 'Carbon Ad']);

 	        adChecked = true;
 	    }
 	}

 	if (window._gaq) {
 	    _gaq.push(['_trackEvent', 'Codrops Demo Ad', 'Carbon ad included', '1']);

 	    adInterval = setInterval(checkAd, 3000);
 	}