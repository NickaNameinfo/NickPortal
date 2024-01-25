module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TransactionAdds", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      transaction_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Transactions", // Assuming a "Transactions" table
          key: "id",
        },
        onDelete: "CASCADE",
      },
      item_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Items", // Assuming a "Items" table for general items
          key: "id",
        },
        onDelete: "CASCADE",
      },
      quantity_added: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1, // Assuming default addition of 1 item
      },
      add_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      added_by: {
        type: Sequelize.INTEGER,
        references: {
          model: "Consumer", // Assuming a "Consumer" table
          key: "id",
        },
      },
      location_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Locations", // Assuming a "Locations" table
          key: "id",
        },
      },
      cost: {
        type: Sequelize.DECIMAL(10, 2),
      },
      notes_comments: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("TransactionAdds");
  },
};
