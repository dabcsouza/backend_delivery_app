const { productsService } = require('../services');

const read = async (_req, res) => {
  const result = await productsService.read();

  res.status(200).json(result);
};

module.exports = {
  read,
};
