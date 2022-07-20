const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  role: Joi.string().valid('seller', 'customer').required(),
  password: Joi.string().min(6).required(),
});

module.exports = registerSchema;
