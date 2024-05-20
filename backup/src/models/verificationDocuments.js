"use strict";
const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class VerificationDocuments extends Model {
    static associate(models) {}
  }

  VerificationDocuments.init(
    {
      // Document details
      document_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      document_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: "document_number",
      },
      issuing_authority: {
        type: Sequelize.STRING,
        field: "issuing_authority",
      },
      issue_date: {
        type: Sequelize.DATE,
        field: "issue_date",
      },
      expiry_date: {
        type: Sequelize.DATE,
        field: "expiry_date",
      },
      document_front_image: {
        type: Sequelize.STRING,
        field: "document_front_image",
      },
      document_back_image: {
        type: Sequelize.STRING,
        field: "document_back_image",
      },
      status: {
        type: Sequelize.ENUM("pending", "approved", "rejected"),
        allowNull: false,
        defaultValue: "pending",
      },
      reason_for_rejection: {
        type: Sequelize.STRING,
        field: "reason_for_rejection",
      },
      submitted_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        field: "submitted_date",
      },
      verification_date: {
        type: Sequelize.DATE,
        field: "verification_date",
      },
      verified_by: {
        type: Sequelize.INTEGER,
        references: {
          model: "Consumer",
          key: "id",
        },
        field: "verified_by",
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
      modelName: "VerificationDocuments",
      timestamps: true,
      underscored: true,
    }
  );

  return VerificationDocuments;
};
