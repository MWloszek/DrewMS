const express = require('express');
const _dbController = require('./controllers/_db-controller.js');

module.exports = function(app) {
	const apiRoutes = express.Router();

	//here be routes
	apiRoutes.get('/getitem', _dbController.readDB);

	app.use('/api', apiRoutes);
}