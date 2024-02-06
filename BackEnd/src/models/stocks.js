"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Stocks extends Model {
    static associate(models) {}
  }

  Stocks.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Products", // Assuming a "Products" table
          key: "id",
        },
        onDelete: "CASCADE",
        field: "product_id",
      },
      warehouse_id: {
        type: Sequelize.TEXT,
        field: "warehouse_id",
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        field: "quantity",
      },
      minimum_quantity: {
        type: Sequelize.INTEGER,
        field: "minimum_quantity",
      },
      maximum_quantity: {
        type: Sequelize.INTEGER,
        field: "maximum_quantity",
      },
      unit_cost: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        field: "unit_cost",
      },
      total_cost: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
        field: "total_cost",
      },
      last_restock_date: {
        type: Sequelize.DATE,
        field: "last_restock_date",
      },
      last_sale_date: {
        type: Sequelize.DATE,
        field: "last_sale_date",
      },
      expiry_date: {
        type: Sequelize.DATE,
        field: "expiry_date",
      },
      stock_status: {
        type: Sequelize.ENUM("in_stock", "out_of_stock", "low_stock"),
        allowNull: false,
        field: "stock_status",
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
      modelName: "Stocks",
      timestamps: true,
      underscored: true,
    }
  );

  return Stocks;
};
