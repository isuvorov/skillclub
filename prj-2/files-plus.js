//23,56,99

//fs
//readFileSync

//__dirname
//__filename


var file = require("fs").readFileSync(__dirname + "/files/a.txt");
console.log(file);

//require("./fs2").readFile(__dirname + "/files/a.txt", function(err, fileA){
//    require("./fs2").readFile(__dirname + "/files/b.txt", function(err, fileB){
//        require("./fs2").readFile(__dirname + "/files/c.txt", function(err, fileC){
//            console.log(fileA + fileB + fileC);
//        });
//    });
//});

var files = [
    __dirname + "/files/a.txt",
    __dirname + "/files/b.txt",
    __dirname + "/files/c.txt",
];

var sum = 0;
var i = 3;

//var async = require("async");


//async.map(files, require("./fs2").readFile, function(err, results){
//
//    var sum = 0;
//    for(i in results){
//        sum += parseInt(results[i]);
//    }
//
//    console.log({sum:sum});
//    // results is now an array of stats for each file
//});

var Q = require("q");

var promises = files.map(function (filename) {
    var deferred = Q.defer();
    require("fs").readFile(filename, function (error, text) {
        if (error) {
            deferred.reject(new Error(error));
        } else {
            deferred.resolve(text);
        }
    });
    return deferred.promise;
});


Q.all(promises)
    .catch(function (error) {
        console.log({error: error})
    })
    .done(function (results) {
        var sum = 0;
        results.forEach(function (result) {
            sum += parseInt(result);
        });
        console.log("done", sum);
    });




//
//
//require("./fs2").readFile(files[0], function (err, data) {
//    sum += parseInt(data);
//    i--;
//    if(i == 0){
//
//        console.log({sum: sum});
//    }
//});
//require("./fs2").readFile(files[1], function (err, data) {
//    sum += parseInt(data);
//    i--;
//    if(i == 0){
//
//        console.log({sum: sum});
//    }
//});
//require("./fs2").readFile(files[2], function (err, data) {
//    sum += parseInt(data);
//    i--;
//    if(i == 0){
//
//        console.log({sum: sum});
//    }
//
//});
//
































