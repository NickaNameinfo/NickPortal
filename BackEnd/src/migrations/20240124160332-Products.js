module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Products", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ProductCategories", // Assuming a "ProductCategories" table
          key: "id",
        },
        onDelete: "CASCADE",
      },
      brand_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ProductBrands", // Assuming a "ProductBrands" table
          key: "id",
        },
        onDelete: "CASCADE",
      },
      vendor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Vendors", // Assuming a "Vendors" table
          key: "id",
        },
        onDelete: "CASCADE",
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      cost: {
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
      featured_product: {
        type: Sequelize.BOOLEAN,
      },
      supplier_product_code: {
        type: Sequelize.STRING,
      },
      barcode_upc: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Products");
  },
};
