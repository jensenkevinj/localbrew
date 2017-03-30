var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('static'));

var key = 'AIzaSyDO-Fu6cshyQ9rwGJWzcgd_ql1UfBD4lsc';

//route pages
app.get ('/', function(req,res) {
	var users = [];
	res.render('index', {users: users});
});

/*

***Original Code

app.get('/user', function(req,res) {
	var check = Users[req.query.name];
	if (check) {
		res.render('user', {name: req.query.name, info: check});
	} else {
		res.send('User does not exist...');
	}
});

app.get('/user/:name', function(req,res) {
	var check = Users[req.params.name];
	if (check) {
		res.render('user', {name: req.params.name, info: check});
	}
	else {
	res.send('User does not exist...');
	}
});*/

// what port to run server on


app.listen(3001, function () {
	console.log('server started on port 3001');
});
