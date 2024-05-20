"use strict";
const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {}
  }

  Categories.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      category_name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "category_name",
      },
      description: {
        type: Sequelize.TEXT,
      },
      parent_category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "parent_category_id",
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
      display_order: {
        type: Sequelize.INTEGER,
        field: "display_order",
      },
      image_url: {
        type: Sequelize.STRING,
        field: "image_url",
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        field: "is_active",
      },
    },
    {
      sequelize,
      modelName: "Categories",
      timestamps: true,
      underscored: true,
    }
  );

  return Categories;
};
