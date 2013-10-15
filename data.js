var data = [
	{ id : 10 },
	{ id : 20 },
	{ id : 30 }
];
function getIds()
{
	var ids = [];
	if (data != null )
	{
		var dataLength = data.length;
		for (var i = 0; i < dataLength; i++)
		{
			ids[i]=data[i].id;
		}
	}
	return ids;	
}

exports.data = data;
exports.getIds = getIds;