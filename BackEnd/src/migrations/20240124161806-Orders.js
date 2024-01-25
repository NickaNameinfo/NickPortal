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
          model: "Consumer", // Assuming a "Consumer" table
          key: "id",
        },
        onDelete: "CASCADE",
      },
      order_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      shipment_address_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ConsumerAddresses", // Assuming a separate "ConsumerAddresses" table
          key: "id",
        },
      },
      billing_address_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ConsumerAddresses", // Assuming same "ConsumerAddresses" table for both
          key: "id",
        },
      },
      total_amount: {
        type: Sequelize.DECIMAL(10, 2),
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
      order_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shipping_method: {
        type: Sequelize.STRING,
      },
      tracking_number: {
        type: Sequelize.STRING,
      },
      discount_amount: {
        type: Sequelize.DECIMAL(10, 2),
      },
      tax_amount: {
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
    await queryInterface.dropTable("Orders");
  },
};
