

var express = require('express');
var app = express();


// console.log(111);
app.get('/', function (req, res) {
  var name = req.param("name")

  res.send('Hello ' + name + '!');

  // console.log(222);
});
// console.log(333);


app.get('/hi', function (req, res) {
  res.send('Hiqweqwe  12312 asd asdasd 321 World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

//return false;

console.log("-----START------");   

var fs = require("fs");


for(var i = 0; i < 10; i++){

	function qwe(a){
		console.log(a);

		var data = fs.readFile("skillclub.txt", function(err, data){
			console.log(err, data);


			var res = data.toString().split("\n").filter(function(row){
				return row != ""
			})
			.map(function(row){
				var rowData = row.split("\t");
				return {
					number: rowData[0],
					title: rowData[1],
					date: rowData[3],
					time: rowData[4],
				};
			});
			fs.writeFile("skillclub-" + a + ".json", JSON.stringify(res), function(err, data){
				console.log("-----FINISH------"); 
			});
		});
	}(i);

	
} 

// console.log(res);

// console.log(123);
 