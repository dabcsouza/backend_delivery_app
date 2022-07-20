const md5 = require('md5');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { timestamps: false, tableName: 'users', hooks: { beforeCreate: (user) => {
    user.set('password', md5(user.password))
  }
} });

  return User;
};
