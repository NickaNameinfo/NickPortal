"use strict";
const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ConsumerAddresses extends Model {
    static associate(models) {}
  }

  ConsumerAddresses.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "customer_id",
      },
      streetAddress1: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "street_address",
      },
      streetAddress2: {
        type: Sequelize.STRING,
        field: "street_address2",
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "city",
      },
      stateProvince: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "state_province",
      },
      postalCode: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "postal_code",
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "country",
      },
      creationDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "creation_date",
      },
      lastUpdated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        onUpdate: Sequelize.NOW,
        field: "last_updated",
      },
    },
    {
      sequelize,
      modelName: "ConsumerAddresses",
      timestamps: true,
      underscored: true,
    }
  );

  return ConsumerAddresses;
};
