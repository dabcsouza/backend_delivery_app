const { Product } = require('../database/models');

const read = async () => Product.findAll();

module.exports = {
  read,
};
