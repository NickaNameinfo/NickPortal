module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("History", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      record_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      table_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      operation: {
        type: Sequelize.ENUM("INSERT", "UPDATE", "DELETE"),
        allowNull: false,
      },
      field_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      old_value: {
        type: Sequelize.TEXT, // Adjust based on data type of your fields
      },
      new_value: {
        type: Sequelize.TEXT, // Adjust based on data type of your fields
      },
      timestamp: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Consumer", // Assuming a "Consumer" table
          key: "id",
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("History");
  },
};
