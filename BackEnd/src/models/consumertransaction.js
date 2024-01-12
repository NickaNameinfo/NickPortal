'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConsumerTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConsumerTransaction.init({
    transactionConsumerId: DataTypes.INTEGER,
    transactionId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    transactionDate: DataTypes.DATE,
    totalAmount: DataTypes.DECIMAL,
    paymentMethod: DataTypes.STRING,
    paymentStatus: DataTypes.STRING,
    invoiceNumber: DataTypes.STRING,
    notes: DataTypes.TEXT,
    creationDate: DataTypes.DATE,
    lastUpdated: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ConsumerTransaction',
  });
  return ConsumerTransaction;
};