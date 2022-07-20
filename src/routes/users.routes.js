const { Router } = require('express');

const { userController } = require('../controllers');
const { authenticator } = require('../middlewares');

const usersRoute = Router();

usersRoute.get('/', authenticator('administrator'), userController.readAll);

usersRoute.delete('/:id', authenticator('administrator'), userController.remove);

module.exports = usersRoute;
