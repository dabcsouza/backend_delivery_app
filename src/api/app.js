const express = require('express');
const cors = require('cors');

require('express-async-errors');

const {
  loginRoute,
  registerRoute,
  productsRoute,
  sellersRoute,
  salesRoute,
  deliveryRoute,
  usersRoute,
} = require('../routes');

const {
  domainError,
  jwtDomainError,
} = require('../middlewares');

const app = express();

app.use(cors());
app.use('/images', express.static('images'));
app.use(express.json());

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/products', productsRoute);
app.use('/sellers', sellersRoute);
app.use('/sales', salesRoute);
app.use('/delivery', deliveryRoute);
app.use('/users', usersRoute);

app.use(jwtDomainError);
app.use(domainError);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
