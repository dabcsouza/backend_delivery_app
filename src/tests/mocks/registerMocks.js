const newUser = {
  name: 'Lucas Pinheiro',
  email: 'lucas@gmail.com',
  password: 'lucas123',
  role: 'customer'
};

const invalidNewUser = {
  name: 'John Canabrava',
  email: 'zebirita@email.com',
  password: '222222',
  role: 'customer'
}

const invalidNewUserBody = {
  name: 'John Canabrava',
  email: 151231,
  password: '222222',
  role: 'customer'
}

module.exports = { newUser, invalidNewUser, invalidNewUserBody };
