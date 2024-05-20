"use strict";
const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Consumer extends Model {
    static associate(models) {}
  }

  Consumer.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      customerId: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        field: "customer_id",
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "first_name",
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "last_name",
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        field: "username",
      },
      emailAddress: {
        type: Sequelize.STRING,
        unique: true,
        field: "email_address",
      },
      phoneNumber: {
        type: Sequelize.STRING,
        field: "phone_number",
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        field: "date_of_birth",
      },
      gender: {
        type: Sequelize.STRING,
        field: "gender",
      },
      addressId: {
        type: Sequelize.INTEGER,
        references: {
          model: "ConsumerAddresses",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "address_id",
      },
      preferredLanguage: {
        type: Sequelize.STRING,
        field: "preferred_language",
      },
      creationDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "creation_date",
      },
      lastUpdated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "last_updated",
      },
      membershipStatus: {
        type: Sequelize.STRING,
        field: "membership_status",
      },
      subscriptionStatus: {
        type: Sequelize.BOOLEAN,
        field: "subscription_status",
      },
      totalPurchaseAmount: {
        type: Sequelize.DECIMAL,
        field: "total_Purchase_amount",
      },
      lastPurchaseDate: {
        type: Sequelize.DATE,
        field: "last_Purchase_date",
      },
      paymentInformation: {
        type: Sequelize.STRING,
        field: "payment_information",
      },
      notesComments: {
        type: Sequelize.TEXT,
        field: "notes_comments",
      },
    },
    {
      sequelize,
      modelName: "Consumer",
      timestamps: true,
      underscored: true,
    }
  );

  return Consumer;
};
