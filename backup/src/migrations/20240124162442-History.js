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
        field: "record_id",
      },
      table_name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "table_name",
      },
      operation: {
        type: Sequelize.ENUM("INSERT", "UPDATE", "DELETE"),
        allowNull: false,
      },
      field_name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "field_name",
      },
      old_value: {
        type: Sequelize.TEXT,
        field: "old_value",
      },
      new_value: {
        type: Sequelize.TEXT,
        field: "new_value",
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
        field: "user_id",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("History");
  },
};
