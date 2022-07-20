const { Router } = require('express');

const { salesController } = require('../controllers');
const { salesSchema } = require('../utils/JoiSchemas');

const {
  validateJoi,
  authenticator,
} = require('../middlewares');

const salesRoute = Router();

salesRoute.post('/', authenticator(), validateJoi(salesSchema), salesController.create);

salesRoute.get('/:id', authenticator(), salesController.read);

module.exports = salesRoute;
