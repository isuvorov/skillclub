module.exports = TestController = {
	index: function(req, res){



		return res.send("index ");

	},

	hello: function(req, res){    
 
		var name = req.param("name");

		//console.log({User:User});
		//return res.send(200);

		var user = {
			name: name
		};
		
		User.create(user, function(err, user){

			return res.json(user);
		});


	},


	create: function(req, res){    
 
		var name = req.param("name");

		//console.log({User:User});
		//return res.send(200);

		var user = {
			name: name
		};
		
		User.create(user, function(err, user){

			return res.json(user);
		});


	},



	find: function(req, res){    
 
		var name = req.param("name");

	
		User.findOne({name: name}, function(err, user){
			if(!user){
				return res.send("No user")
			}

			return res.json(user);
		});
	},


	find2: function(req, res){    
 
		var name = req.param("name");
		User.findOne({name: name}, function(err, user){
			if(!user){
				return res.send("No user")
			}

			// return res.json(user);
			console.log(req);
			if(req.wantsJSON){
				return res.json(user)
			}else{
				return res.render("test/find2", {
					users: [user]
				});
			}

		});
	},


	jade: function(req, res){  

		User.find({}, function(err, users){
			if(err){
				return res.serverError("Internal error");
			}
			if(users.length == 0){
				return res.notFound("No users");
			}

			return res.render("test/jade", {
				qwe:123,
				name: "JADE",
				wrapper: JSON.stringify,
				users: users
			});

		})


/*
		User.findOne(123214, function(err, user){
			if(err){
				return res.serverError("Internal error");
			}
			if(!user){
				return res.notFound("No user");
			}


			return res.render("test/jade", {
				qwe:123,
				name: "JADE",
				wrapper: JSON.stringify,
				user: user
			});

		})

		*/


		// return res.send("jade");
	}
}