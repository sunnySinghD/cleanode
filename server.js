var http = require('http');
var url = require('url');
var router = require('./router');

var server = http.createServer(onRequest);
server.listen(8000, function(){
	console.log("server is listening on port 8000")
});

function onRequest(req, res){
	console.log("server got request");
	router.start(getRoutes(req.url), res);
	res.end();
};

function getRoutes(urlString)
{
	var requestUrl = url.parse(urlString).pathname;
	requestUrl = requestUrl == null ? "" : requestUrl.slice(1);

	if (requestUrl.length > 0)
	{
		//var requestUrl = requestUrl.slice(0);
		var routes = requestUrl.split('/');
		console.log(routes);
	}
	return routes || [];
};