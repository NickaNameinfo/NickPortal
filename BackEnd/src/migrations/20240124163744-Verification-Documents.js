module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("VerificationDocuments", {
      // Document details
      document_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      document_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // Ensures unique document identifiers
      },
      issuing_authority: {
        type: Sequelize.STRING,
      },
      issue_date: {
        type: Sequelize.DATE,
      },
      expiry_date: {
        type: Sequelize.DATE,
      },
      document_front_image: {
        type: Sequelize.STRING, // Adjust based on image storage solution
      },
      document_back_image: {
        type: Sequelize.STRING, // Adjust based on image storage solution
      },

      // Verification workflow
      status: {
        type: Sequelize.ENUM("pending", "approved", "rejected"),
        allowNull: false,
        defaultValue: "pending",
      },
      reason_for_rejection: {
        type: Sequelize.STRING,
      },
      submitted_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      verification_date: {
        type: Sequelize.DATE,
      },
      verified_by: {
        type: Sequelize.INTEGER,
        references: {
          model: "Consumer", // Assuming a "Consumer" table
          key: "id",
        },
      },
      notes_comments: {
        type: Sequelize.TEXT,
      },

      // Timestamps
      creation_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      last_updated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("VerificationDocuments");
  },
};
