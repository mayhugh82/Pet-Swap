'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sitter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Sitter.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    email: DataTypes.STRING,
    duration: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    size: DataTypes.STRING,
    temperament: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sitter',
  });
  return Sitter;
};