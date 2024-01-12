"use strict";
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Consumer = sequelize.define("Consumer", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    customerId: {
      type: DataTypes.STRING,
      field: "customer_id",
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
    // addressId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "Addresses", // Assuming there's an 'Addresses' table
    //     key: "addressId",
    //   },
    // },
    preferredLanguage: {
      type: DataTypes.STRING,
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
      type: DataTypes.JSONB,
    },
    notesComments: {
      type: DataTypes.TEXT,
    },
  });

  return Consumer;
};
