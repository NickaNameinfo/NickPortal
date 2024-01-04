"use strict";
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Consumer = sequelize.define("Consumer", {
    customerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.STRING,
    },
    addressId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Addresses", // Assuming there's an 'Addresses' table
        key: "addressId",
      },
    },
    preferredLanguage: {
      type: DataTypes.STRING,
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    lastUpdated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    membershipStatus: {
      type: DataTypes.STRING,
    },
    subscriptionStatus: {
      type: DataTypes.STRING,
    },
    totalPurchaseAmount: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    lastPurchaseDate: {
      type: DataTypes.DATE,
    },
    paymentInformation: {
      type: DataTypes.JSONB, // Assuming payment information is stored as JSONB
    },
    notesComments: {
      type: DataTypes.TEXT,
    },
  });

  return Consumer;
};
