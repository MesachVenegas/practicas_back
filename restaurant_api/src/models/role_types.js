'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Role_types.init({
    type: DataTypes.ENUM('admin', 'seller', 'cashier')
  }, {
    sequelize,
    modelName: 'Role_types',
  });
  return Role_types;
};