"use strict";
const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Invoices extends Model {
    static associate(models) {}
  }

  Invoices.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Consumer",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "consumer_id",
      },
      invoice_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        field: "invoice_date",
      },
      due_date: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "due_date",
      },
      billing_address_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ConsumerAddresses",
          key: "id",
        },
        field: "billing_address_id",
      },
      total_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        field: "total_amount",
      },
      tax_amount: {
        type: Sequelize.DECIMAL(10, 2),
        field: "tax_amount",
      },
      discount_amount: {
        type: Sequelize.DECIMAL(10, 2),
        field: "discount_amount",
      },
      amount_paid: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0.0,
        field: "amount_paid",
      },
      payment_status: {
        type: Sequelize.ENUM("paid", "partially_paid", "unpaid"),
        allowNull: false,
        field: "payment_status",
      },
      invoice_status: {
        type: Sequelize.ENUM("issued", "sent", "overdue"),
        allowNull: false,
        field: "invoice_status",
      },
      payment_method: {
        type: Sequelize.STRING,
        field: "payment_method",
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
      modelName: "Invoices",
      timestamps: true,
      underscored: true,
    }
  );

  return Invoices;
};
