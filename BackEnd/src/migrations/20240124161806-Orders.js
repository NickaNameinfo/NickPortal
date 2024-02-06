module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Orders", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Consumer",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "consumer_id",
      },
      order_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        field: "order_date",
      },
      shipment_address_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ConsumerAddresses",
          key: "id",
        },
        field: "shipment_address_id",
      },
      billing_address_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ConsumerAddresses",
          key: "id",
        },
        field: "billing_address_id",
      },
      total_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        field: "total_amount",
      },
      payment_method: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "payment_method",
      },
      payment_status: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "payment_status",
      },
      order_status: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "order_status",
      },
      shipping_method: {
        type: Sequelize.STRING,
        field: "shipping_method",
      },
      tracking_number: {
        type: Sequelize.STRING,
        field: "tracking_number",
      },
      discount_amount: {
        type: Sequelize.DECIMAL(10, 2),
        field: "discount_amount",
      },
      tax_amount: {
        type: Sequelize.DECIMAL(10, 2),
        field: "tax_amount",
      },
      notes_comments: {
        type: Sequelize.TEXT,
        field: "notes_comments",
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Orders");
  },
};
