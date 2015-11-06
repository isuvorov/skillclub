//forever

//var _ = require("lodash");
var _ = require("underscore");

var stooges = [{name: 'moe', age: 40},{name: 'moe2', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
var stooges2 = _.indexBy(stooges, 'age');

// console.log(stooges2)

var obj = {
	a: "aa",
	b:"bb",
	c: "cc"
};


var obj2 = _.mapObject(obj, function(val, key) {
  return val.toUpperCase();
});

// console.log(obj2);



var fs = require('fs');
var path = require('path');
var async = require('async');

var files =  ['file1','file2', 'file2'];
files = files.map(function(file){
	return path.resolve(__dirname, "folder/",  file);
})

var fileReader = function(filename, next){
	fs.readFile(filename, function(err, data){
		if(err){
			return next(err);
		}
		// console.log(filename + ": "+ data.toString());
		next(null, filename + ": "+ data.toString())
	})

	// console.log(file);
};
// files.map(fileReader)

async.map(files, fs.stat, function(err, results){
	console.log(results);
    // results is now an array of stats for each file
});

// async.map(files, fileReader, function(err, results){
// 	if(err){
// 		console.log(err)
// 		return false;
// 	}
// 	console.log("end", results);
//     // results is now an array of stats for each file
// });


if(app.config.environment.buildURL){

}
