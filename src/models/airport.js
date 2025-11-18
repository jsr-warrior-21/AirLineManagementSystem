'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City,{ // here belongsTo is sequelize method so that when i delete any city then associated flight or airport automatically deleted from the data bases.
        foreignKey:'cityId',
        onDelete:'CASCADE' // here we are using onDelete properties so on the moment when i am deleting the city then airport associated with that city autometically deleted other wise it will be a wizard bug.
      })
    }
  }
  Airport.init({
    name: {allowNull:false,type:DataTypes.STRING},
    cityId: DataTypes.INTEGER,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};