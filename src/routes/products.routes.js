const { Router } = require('express');

const { productsController } = require('../controllers');

const productsRoute = Router();

productsRoute.get('/', productsController.read);

module.exports = productsRoute;
