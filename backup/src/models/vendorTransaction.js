"use strict";
const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class VendorTransactions extends Model {
    static associate(models) {}
  }

  VendorTransactions.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      transactionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Transactions",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "transaction_ID",
      },
      vendorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Vendors",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "vendor_ID",
      },
      transactionDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "transaction_Date",
      },
      totalAmount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        field: "total_amount",
      },
      paymentMethod: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "payment_Method",
      },
      paymentStatus: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "payment_Status",
      },
      invoiceNumber: {
        type: Sequelize.STRING,
        field: "invoice_Number",
      },
      notesComments: {
        type: Sequelize.TEXT,
        field: "notes_comments",
      },
      creationDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "creation_date",
      },
      lastUpdated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "last_updated",
      },
    },
    {
      sequelize,
      modelName: "VendorTransactions",
      timestamps: true,
      underscored: true,
    }
  );

  return VendorTransactions;
};
