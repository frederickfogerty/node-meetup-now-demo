var basePath = __dirname;
var http = require('http');
var fs = require('fs');
var path = require('path');


const page = `
<style>
	html, body, .viewport {
		width: 100%;
		height: 100%;
		margin: 0;
	}
</style>
<div style="
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
">
	<h1>Hey Node Meetup!</h1>
</div>
`;








http.createServer(function (req, res) {
	res.setHeader('Content-Type', 'text/html')
	res.writeHead(200);
	res.end(page);
}).listen(3000);
