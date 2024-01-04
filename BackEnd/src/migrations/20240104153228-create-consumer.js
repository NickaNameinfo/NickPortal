"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Consumers", {
      customerId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        field: "customer_id",
      },
      firstName: {
        type: Sequelize.STRING,
        field: "first_name",
      },
      lastName: {
        type: Sequelize.STRING,
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
          model: "Addresses", // Assuming there's an 'Addresses' table
          key: "addressId",
        },
        field: "address_id",
      },
      preferredLanguage: {
        type: Sequelize.STRING,
        field: "preferred_language",
      },
      creationDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "creation_date",
      },
      lastUpdated: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "last_updated",
      },
      membershipStatus: {
        type: Sequelize.STRING,
        field: "membership_status",
      },
      subscriptionStatus: {
        type: Sequelize.STRING,
        field: "subscription_status",
      },
      totalPurchaseAmount: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        field: "total_purchase_amount",
      },
      lastPurchaseDate: {
        type: Sequelize.DATE,
        field: "last_purchase_date",
      },
      paymentInformation: {
        type: Sequelize.JSONB,
        field: "payment_information",
      },
      notesComments: {
        type: Sequelize.TEXT,
        field: "notes_comments",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Consumers");
  },
};
