const md5 = require('md5');

const { User } = require('../database/models');
const { AppError, jwt } = require('../utils');

const verifyUserEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  if (!user) return null;

  return user.dataValues;
};

const login = async (e, password) => {
  const result = await verifyUserEmail(e);

  if (!result) {
    throw AppError('notFound', 'User not exists');
  }

  const parsedPassword = md5(password);

  if (result.password !== parsedPassword) {
    throw AppError('unauthorized', 'Incorrect email or password');
  }

  const { role, name, email, id } = result;

  const token = jwt.sign({ role, name, email, id });

  return token;
};

const createUser = async ({ name, email, password, role }) => {
  const newUser = {
    name,
    email,
    password,
    role,
  };

  const [result, err] = await User.findOrCreate({
    where: { email },
    defaults: {
      ...newUser,
    },
  });

  if (!err) {
    throw AppError('conflict', 'This email address is already in use');
  }

  const { id } = result;

  const token = jwt.sign({ role, name, email, id });

  return token;
};

const getSellers = async () => User.findAll(
  { where: { role: 'seller' }, attributes: ['id', 'name'] },
  );

const remove = async (id) => {
  const user = await User.findByPk(id);

  if (!user) {
    throw AppError('notFound', 'User not exists');
  }

  await user.destroy();
};

module.exports = {
  createUser,
  login,
  getSellers,
  remove,
};
