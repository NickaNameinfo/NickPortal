"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class StoresTransactions extends Model {
    static associate(models) {}
  }

  StoresTransactions.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      transaction_store_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: "transaction_store_id",
      },
      transaction_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Transactions",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "transactions_id",
      },
      store_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Stores",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "store_id",
      },
      transaction_date: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "transaction_date",
      },
      total_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        field: "total_amount",
      },
      payment_method: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "payment_method",
      },
      payment_status: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "payment_status",
      },
      invoice_number: {
        type: Sequelize.STRING,
        field: "invoice_number",
      },
      notes_comments: {
        type: Sequelize.TEXT,
        field: "notes_comments",
      },
      creation_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "creation_date",
      },
      last_updated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "last_updated",
      },
    },
    {
      sequelize,
      modelName: "StoresTransactions",
      timestamps: true,
      underscored: true,
    }
  );

  return StoresTransactions;
};
