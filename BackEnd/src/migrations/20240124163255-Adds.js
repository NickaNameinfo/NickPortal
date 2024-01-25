module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Adds", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
          model: "Users", // Assuming a "Users" table
          key: "id",
        },
      },
      reason: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Adds");
  },
};
