const { Router } = require('express');

const { userController } = require('../controllers');
const registerSchema = require('../utils/JoiSchemas/registerSchema');
const validateJoi = require('../middlewares/validateJoi');

const registerRoute = Router();

registerRoute.post('/', validateJoi(registerSchema), userController.register);

module.exports = registerRoute;
