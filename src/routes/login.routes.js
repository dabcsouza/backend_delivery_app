const { Router } = require('express');

const { loginController } = require('../controllers');
const loginSchema = require('../utils/JoiSchemas/loginSchema');
const validateJoi = require('../middlewares/validateJoi');

const loginRoute = Router();

loginRoute.post('/', validateJoi(loginSchema), loginController.login);

module.exports = loginRoute;
