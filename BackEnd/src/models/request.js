"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Requests extends Model {
    static associate(models) {}
  }

  Requests.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      requester_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users", // Assuming a "Users" table
          key: "id",
        },
        onDelete: "CASCADE",
        field: "product_id",
      },
      request_type: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "request_type",
      },
      subject: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      priority: {
        type: Sequelize.ENUM("low", "medium", "high"),
        allowNull: false,
      },
      assigned_to: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users", // Assuming users can be assigned requests
          key: "id",
        },
        field: "assigned_to",
      },
      due_date: {
        type: Sequelize.DATE,
        field: "due_date",
      },
      completion_date: {
        type: Sequelize.DATE,
        field: "completion_date",
      },
      attachments: {
        type: Sequelize.TEXT,
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
      modelName: "Requests",
      timestamps: true,
      underscored: true,
    }
  );

  return Requests;
};
