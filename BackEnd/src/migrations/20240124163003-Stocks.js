module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Stocks", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Products", // Assuming a "Products" table
          key: "id",
        },
        onDelete: "CASCADE",
      },
      warehouse_id: {
        type: Sequelize.TEXT,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      minimum_quantity: {
        type: Sequelize.INTEGER,
      },
      maximum_quantity: {
        type: Sequelize.INTEGER,
      },
      unit_cost: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      total_cost: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      // Calculate total_cost on insert/update using Sequelize triggers or database functions
      last_restock_date: {
        type: Sequelize.DATE,
      },
      last_sale_date: {
        type: Sequelize.DATE,
      },
      expiry_date: {
        type: Sequelize.DATE,
      },
      stock_status: {
        type: Sequelize.ENUM("in_stock", "out_of_stock", "low_stock"),
        allowNull: false,
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
    await queryInterface.dropTable("Stocks");
  },
};
