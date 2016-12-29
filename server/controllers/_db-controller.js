exports.readDB = function(req, res, next) {
	const mongo = require('mongodb').MongoClient;
	let value;
	
	mongo.connect("mongodb://andrew-app:password@ds141118.mlab.com:41118/andrew-app", function(err, db) {
		if (!err) {
			console.log("you done got connected");
		} else {
			console.log("you done fucked up son");
		}
	})
	res.status(200).json({
		message: "Hello you beautiful bastard"
	})
}