module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("SubProducts", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      subproduct_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      stock_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      unit_of_measure: {
        type: Sequelize.STRING,
      },
      weight: {
        type: Sequelize.DECIMAL(6, 2),
      },
      dimensions: {
        type: Sequelize.STRING,
      },
      creation_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      last_updated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      discount_percentage: {
        type: Sequelize.DECIMAL(5, 2),
      },
      tax_rate: {
        type: Sequelize.DECIMAL(5, 2),
      },
      availability: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      featured_subproduct: {
        type: Sequelize.BOOLEAN,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("SubProducts");
  },
};
