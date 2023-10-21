'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    flightId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },

    userId:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    status: {
      type:DataTypes.INTEGER,
      allowNull:false,
      values:['Processing...','Booked','Cancelled'],
      defaultValue:'Processing...'
    },
    seats: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:1
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};