

var db;
var url = 'mongodb://test:test@ds045684.mongolab.com:45684/skillclub';

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, database) {
  var db = database;


  console.log("Connected correctly to server", err);

db.collection('pet').find({}).toArray(function(err, docs) {
	    console.log("Found the following records");
	    console.dir(docs);
	  });

  db.close();
});


// var types = {
// 	human: "Человек",
// 	hamster: "Хомяк",
// 	dog: "Собака",
// }

// module.exports = {
// 	index: function(req, res){
// 		var id = req.param("id", "5635df95e4b0292685f78cfa");


// 		if(!db){
// 			return res.send("!db");
// 			return false;
// 		}

// 		 db.collection('pet').find({}).toArray(function(err, docs) {
// 	    assert.equal(err, null);
// 	    assert.equal(2, docs.length);
// 	    console.log("Found the following records");
// 	    console.dir(docs);
// 	    callback(docs);
// 	  });

// 		// db.collection('pet').find({}, function(err,cursor){
// 		// 	console.log("success", cursor.toArray());
// 		// 	// cursor.toArray(function(err, pets){
// 		// 	// 	return res.json({pets:pets});
// 		// 	// });
// 		// });
// 		// db.collection('pet').find().toArray(function(err, pets){
// 		// 	return res.json({pets:pets});
// 		// });

// 		return ;




// 		// req.param("id")
// 		// undefined
// 		// id[]=1&id[]=2&id[]=3
// 		// [1,2,3]
// 		// 1

// 		// req.param("type")
// 		// dog

// 		var pet = {
// 			name: "Igor",
// 			type: "human"
// 		};




// 		pet.typeName = types[pet.type];
	

// 		return res.render("pets", {pet:pet});

// 	}

// }