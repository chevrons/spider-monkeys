let headlines;
let articles;

function loadData() {
	let mydata = JSON.parse(data);
	headlines = mydata[0].headlines;
	articles = mydata[0].articles;
}

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
