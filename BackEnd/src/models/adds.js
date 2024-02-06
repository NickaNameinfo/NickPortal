"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Adds extends Model {
    static associate(models) {}
  }

  Adds.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      item_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Items",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "item_id",
      },
      quantity_added: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        field: "quantity_added",
      },
      add_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        field: "add_date",
      },
      added_by: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        field: "added_by",
      },
      reason: {
        type: Sequelize.STRING,
      },
      location_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Locations",
          key: "id",
        },
        field: "location_id",
      },
      cost: {
        type: Sequelize.DECIMAL(10, 2),
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
      modelName: "Adds",
      timestamps: true,
      underscored: true,
    }
  );

  return Adds;
};
