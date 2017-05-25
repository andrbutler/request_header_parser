var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 8080));

app.get('/', function(req, resp){
	resp.writeHead(200, {'Content-type': 'application/json'});
	var id = {
		'ip address': req.ip, 
		'language': req.headers['accept-language'], 
		'software': req.headers['user-agent']}
	resp.on('error', function(error){
		console.log(error);
	});
	resp.end(JSON.stringify(id));
});

app.listen(app.get('port'), function(){
	console.log('app running on port: ' + app.get('port'))
});