"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    static associate(models) {}
  }

  Store.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      storeName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "store_Name",
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "phone_Number",
      },
      emailAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: "email_Address",
      },
      storeManager: {
        type: Sequelize.STRING,
        field: "store_Manager",
      },
      openingHours: {
        type: Sequelize.STRING,
        field: "opening_Hours",
      },
      storeTypeCategory: {
        type: Sequelize.STRING,
        field: "store_Type_Category",
      },
      storeLocation: {
        type: Sequelize.STRING,
        field: "store_Location",
      },
      storeImage: {
        type: Sequelize.STRING,
        field: "store_Image",
      },
      storeSize: {
        type: Sequelize.INTEGER,
        field: "store_Size",
      },
      numberOfEmployees: {
        type: Sequelize.INTEGER,
        field: "number_of_employees",
      },
      storeStatus: {
        type: Sequelize.STRING,
        field: "store_Status",
      },
      creationDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "creation_date",
      },
      lastUpdated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "last_Updated",
      },
    },
    {
      sequelize,
      modelName: "Store",
      timestamps: true,
      underscored: true,
    }
  );

  return Store;
};
