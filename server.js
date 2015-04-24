var express = require('express');
var bodyParser     =        require("body-parser");
var app            =        express();
app.use(bodyParser.json())
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.post('/', function(req, res) {
  console.log(req.body);
  var num = parseInt(req.body.text) || 'bad input';
  console.log(num);
  // res.send(num + '');
  if (num === 'bad input') {
    res.send(num);
  } else {
    var total = 1;
    while(num > 1) {
      total *= num;
      num--;
    }
    res.send(total + '')
  }
  //res.send('balh blah' + req.body.text);
})
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});