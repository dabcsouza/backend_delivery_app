const { Router } = require('express');

const { userController } = require('../controllers');

const sellersRoute = Router();

sellersRoute.get('/', userController.getSellers);

module.exports = sellersRoute;
