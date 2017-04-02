var express = require('express');
var sys = require('sys')
var exec = require('child_process').exec;
var app = express();
app.use(express.static('public'))
app.get('/', function (req, res) {
  res.sendFile(__dirname +'/index.html')
});

app.get('/speak', function(req, res){
text = req.query.text;
console.log(text);
text = text.replace(/%20/g," ");
speed = 250

if (req.query.speed != undefined){
	
	speed = req.query.speed; 

}
// text = text.replace(/'/g, "''");
console.log(text);
var executor = exec("say " + '"' + text + '"' + " -r " + speed );
executor.on('exit', function(){
	res.send("success");
});

});

app.get('/list', function(req, res){
	console.log(req);
	console.log(res);
	text = "yeeeee"

	exec("say " + text)
});

app.listen(3000, function() {console.log('listening')}); 
