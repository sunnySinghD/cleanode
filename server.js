var http = require('http');
var url = require('url');
var data = require('./data');

function onRequest(req, res){
	console.log("server got request");
	var requestUrl = url.parse(req.url).pathname;
	requestUrl = requestUrl == null ? "" : requestUrl.slice(1);

	if (requestUrl.length > 0)
	{
		//var requestUrl = requestUrl.slice(0);
		var routes = requestUrl.split('/');
		console.log(routes);
		if (routes[0] == "data")
		{
			console.log("routing for data");
			res.write(JSON.stringify(data.data));
			res.end();
		}
		// var maxI = routes.length;
		// for (var i = 0; i < routes.length; i++) {
		// 	console.log("routing for " + routes[i]);
		// };
		res.write("got response");
	}
	res.end();
};

var server = http.createServer(onRequest);
server.listen(8000, function(){
	console.log("server is listening on port 8000")
});