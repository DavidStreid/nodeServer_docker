var express = require('express'),
  app = express(),
  port = process.env.PORT || 4200,
  bodyParser = require('body-parser');	// Parse incoming bodies

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port);

var routes = require('./api/routes/routes'); 	//importing route
routes(app); 									//register the route

console.log('Simple server started: ' + port);