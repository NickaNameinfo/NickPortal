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
        field: "product_name",
      },
      description: {
        type: Sequelize.TEXT,
        field: "description",
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ProductCategories",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "category_id",
      },
      brand_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ProductBrands",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "brand_id",
      },
      vendor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Vendors",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "vendor_id",
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        field: "price",
      },
      cost: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        field: "cost",
      },
      stock_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "stock_quantity",
      },
      unit_of_measure: {
        type: Sequelize.STRING,
        field: "unit_of_measure",
      },
      weight: {
        type: Sequelize.DECIMAL(6, 2),
        field: "weight",
      },
      dimensions: {
        type: Sequelize.STRING,
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
      discount_percentage: {
        type: Sequelize.DECIMAL(5, 2),
        field: "discount_percentage",
      },
      tax_rate: {
        type: Sequelize.DECIMAL(5, 2),
        field: "tax_rate",
      },
      availability: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      featured_product: {
        type: Sequelize.BOOLEAN,
        field: "featured_product",
      },
      supplier_product_code: {
        type: Sequelize.STRING,
        field: "supplier_product_code",
      },
      barcode_upc: {
        type: Sequelize.STRING,
        field: "barcode_upc",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Products");
  },
};
