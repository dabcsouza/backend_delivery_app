const { Router } = require('express');

const { salesController } = require('../controllers');

const { deliverySchema } = require('../utils/JoiSchemas');

const {
  validateJoi,
  authenticator,
} = require('../middlewares');

const deliveryRoute = Router();

deliveryRoute.patch(
  '/:id',
  authenticator(),
  validateJoi(deliverySchema),
  salesController.updateDelivery,
);

module.exports = deliveryRoute;
