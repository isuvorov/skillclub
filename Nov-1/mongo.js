
/***
host ds045684.mongolab.com
port 45684
name skillclub
user test
pass test

mongodb://test:test@ds045684.mongolab.com:45684/skillclub

npm install mongodb --save
*/


//npm install https://github.com/balderdashy/sails-hook-dev.git

var MongoClient = require('mongodb').MongoClient;


var url = 'mongodb://test:test@ds045684.mongolab.com:45684/skillclub';

MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server");

  db.close();
});



// To connect using the mongo shell:
// mongo ds045684.mongolab.com:45684/skillclub -u <dbuser> -p <dbpassword>
// To connect using a driver via the standard MongoDB URI (what's this?):
//   mongodb://<dbuser>:<dbpassword>@ds045684.mongolab.com:45684/skillclub