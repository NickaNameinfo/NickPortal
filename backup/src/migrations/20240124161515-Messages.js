module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Messages", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      sender_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Consumer", // Assuming a "Consumer" table
          key: "id",
        },
        onDelete: "CASCADE",
        field: "sender_id",
      },
      recipient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Consumer", // Assuming recipients are also Consumer
          key: "id",
        },
        field: "recipient_id",
      },
      subject: {
        type: Sequelize.STRING,
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      timestamp: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      read_status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: "read_status",
      },
      is_archived: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: "is_archived",
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: "is_deleted",
      },
      attachments: {
        type: Sequelize.TEXT, // Assuming storing links or references
      },
      parent_message_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Messages",
          key: "id",
        },
        field: "parent_message_id",
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Messages");
  },
};
