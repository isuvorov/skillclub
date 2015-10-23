//23,56,99

//fs
//readFileSync

//__dirname
//__filename


var file = require("fs").readFileSync(__dirname + "/files/a.txt");
console.log(file);

require("./fs2").readFile(__dirname + "/files/a.txt", function(err, data){
    console.log(data);
});


