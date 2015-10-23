console.log("-----START------");   

var fs = require("fs");


for(var i = 0; i < 10000; i++){

var data = fs.readFileSync("skillclub.txt");

var res = data.toString().split("\n").map(function(row){
	var rowData = row.split("\t");
	return {
		number: rowData[0],
		title: rowData[1],
		date: rowData[3],
		time: rowData[4],
	};
});

fs.writeFileSync("skillclub-" + i + ".json", JSON.stringify(res));
} 

// console.log(res);

// console.log(123);
console.log("-----FINISH------");  