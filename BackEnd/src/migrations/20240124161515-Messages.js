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
      },
      recipient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Consumer", // Assuming recipients are also Consumer
          key: "id",
        },
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
        defaultValue: false, // Assuming unread by default
      },
      is_archived: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable("Messages");
  },
};
