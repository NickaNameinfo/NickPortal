"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ConsumerTransactions extends Model {
    static associate(models) {}
  }

  ConsumerTransactions.init(
    {
      totalAmount: {
        type: Sequelize.DECIMAL,
        field: "total_amount",
      },
      paymentMethod: {
        type: Sequelize.STRING,
        field: "payment_method",
      },
      paymentStatus: {
        type: Sequelize.STRING,
        field: "payment_status",
      },
      invoiceNumber: {
        type: Sequelize.STRING,
        field: "invoice_number",
      },
      notes: {
        type: Sequelize.TEXT,
        field: "notes",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "ConsumerTransactions",
      timestamps: true,
      underscored: true,
    }
  );

  return ConsumerTransactions;
};
