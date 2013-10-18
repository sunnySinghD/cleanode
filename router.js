var data = require('./data');

function start(routes, res)
{
	if (routes != null && routes.length > 0)
	{
		console.log(routes);
		if (routes[0] == "data")
		{
			res.write(JSON.stringify(data.data));
		}
		else if (routes[0] == "id") 
		{
			res.write(JSON.stringify(data.getIds()));
		}
		else
		{
			res.write("Instead of /" + routes[0] + ", try /data or /id");
		}
	}
	else
	{
		res.write("home. Try /data or /id in the url")
	}
}

exports.start = start;