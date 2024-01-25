module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("StoresTransactions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      transaction_store_id: {
        type: Sequelize.INTEGER,
        primaryKey: true, // Can be adjusted based on your preference
      },
      transaction_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Transactions", // Assuming a "Transactions" table
          key: "id",
        },
        onDelete: "CASCADE",
      },
      store_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Stores",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      transaction_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      total_amount: {
        type: Sequelize.DECIMAL(10, 2), // Adjust precision as needed
        allowNull: false,
      },
      payment_method: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      payment_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      invoice_number: {
        type: Sequelize.STRING, // Assuming string format
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
    await queryInterface.dropTable("StoresTransactions");
  },
};
