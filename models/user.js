"use strict";
const { Model } = require("sequelize");
const { SALT } = require("../config/serverConfig");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Role, {
        through: "User_Roles",
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 300],
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  // encryption

  User.beforeCreate((user) => {
    // before user creation you have access to the user credential.
    const encryptedPassword = bcrypt.hashSync(user.password, SALT); // user.password access your plane pass and hashSync will encrypt your password then update your password
    user.password = encryptedPassword;
  });

  // now you have done with encryption of the password and in the database password will save with encryption.

  return User;
};
