let headlines;

function load() {
	let mydata = JSON.parse(data);
	headlines = mydata[0].headlines;
	articles = mydata[0].articles;
}
