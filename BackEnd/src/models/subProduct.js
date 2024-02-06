"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SubProducts extends Model {
    static associate(models) {}
  }

  SubProducts.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "product_id",
      },
      subproduct_name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "subproduct_name",
      },
      description: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      stock_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "stock_quantity",
      },
      unit_of_measure: {
        type: Sequelize.STRING,
        field: "unit_of_measure",
      },
      weight: {
        type: Sequelize.DECIMAL(6, 2),
      },
      dimensions: {
        type: Sequelize.STRING,
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
      discount_percentage: {
        type: Sequelize.DECIMAL(5, 2),
        field: "discount_percentage",
      },
      tax_rate: {
        type: Sequelize.DECIMAL(5, 2),
        field: "tax_rate",
      },
      availability: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      featured_subproduct: {
        type: Sequelize.BOOLEAN,
        field: "featured_subproduct",
      },
    },
    {
      sequelize,
      modelName: "SubProducts",
      timestamps: true,
      underscored: true,
    }
  );

  return SubProducts;
};
