module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Requests", {
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
      },
      request_type: {
        type: Sequelize.STRING,
        allowNull: false,
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
      },
      due_date: {
        type: Sequelize.DATE,
      },
      completion_date: {
        type: Sequelize.DATE,
      },
      attachments: {
        type: Sequelize.TEXT, // Assuming storing links or references
      },
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
    await queryInterface.dropTable("Requests");
  },
};
