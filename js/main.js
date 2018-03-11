let headlines;
let articles;
let errors = [];

function loadData() {
	try {
		let mydata = JSON.parse(data);
		headlines = mydata[0].headlines;
		articles = mydata[0].articles;
	} catch(err){
		console.error(err);
		errors.push("<span class=\"glyphicon glyphicon-alert\" aria-hidden=\"true\"></span> The content on this page could not be shown. Try to reload the page. If the error persists, contact us.");
	}
}

/* Never mind...
function arrayBufferToBase64(buffer) {
	var binary = '';
	var bytes = [].slice.call(new Uint8Array(buffer));

	bytes.forEach((b) => binary += String.fromCharCode(b));

	return window.btoa(binary);
};

function fetchImage(imageUrl) {
	console.log("FETCHING IMAGE..");
	var url = imageUrl;
	var headers = new Headers({'X-Mashape-Key': 'API_KEY'});
	var options = {
		method: 'GET',
		headers: headers,
		mode: 'cors',
		cache: 'default'
	};
	var request = new Request(url);

	fetch(request, options).then((response) => {
		response.arrayBuffer().then((buffer) => {
			var base64Flag = 'data:image/jpeg;base64,';
			var imageStr = arrayBufferToBase64(buffer);

			return base64Flag + imageStr;
		});
	});
}
*/


function renderImg(url, alt) {
	return "<div class=\"blurb-image\">" +
						"<img class=\"img-responsive\" src=\"" + url + "\" alt=\"" + alt + "\"/>" +
					"</div>";
}

function renderText(title, text) {
	return "<div class=\"blurb-text\">" +
						"<h3>"+ title +"</h3>" +
						"<p>" + text + "</p>" +
					"</div>";
}

function renderLink(href, lang, text, className) {
	let link = "<a href=\"" + href + "\">" + eval(lang+".readMore") + text + "</a>";
	return (href !== undefined || href !== "") ? "<div  class=\"blurb-link " + className + "\">" + link + "</div>" : "";
}

function renderFadin() {
	return "<div class=\"blurb-fadin\"></div>";
}


loadData();
