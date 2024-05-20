"use strict";
const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Vendors extends Model {
    static associate(models) {}
  }

  Vendors.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      vendorId: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        field: "vendor_Id",
      },
      vendorName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "vendor_Name",
      },
      addressId: {
        type: Sequelize.INTEGER,
        references: {
          model: "VendorAddresses",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "address_Id",
      },
      contactPerson: {
        type: Sequelize.STRING,
        field: "contact_Person",
      },
      emailAddress: {
        type: Sequelize.STRING,
        field: "email_Address",
      },
      phoneNumber: {
        type: Sequelize.STRING,
        field: "phone_Number",
      },
      taxId: {
        type: Sequelize.STRING,
        field: "tax_Id",
      },
      paymentTerms: {
        type: Sequelize.STRING,
        field: "payment_Terms",
      },
      preferredCurrency: {
        type: Sequelize.STRING,
        field: "preferred_currency",
      },
      productsServicesProvided: {
        type: Sequelize.TEXT,
        field: "products_Services_Provided",
      },
      leadTime: {
        type: Sequelize.INTEGER,
        field: "lead_Time",
      },
      notesComments: {
        type: Sequelize.TEXT,
        field: "notes_Comments",
      },
      creationDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "creation_Date",
      },
      lastUpdated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "last_updated",
      },
      totalStores: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        field: "total_stores",
      },
      numberCategory: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        field: "number_categories",
      },
      vendorImage: {
        type: Sequelize.STRING,
        field: "vendor_image",
      },
      vendorDocuments: {
        type: Sequelize.TEXT,
        field: "vendor_documents",
      },
    },
    {
      sequelize,
      modelName: "Vendors",
      timestamps: true,
      underscored: true,
    }
  );

  return Vendors;
};
