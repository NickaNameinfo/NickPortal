module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Invoices", {
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
      invoice_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      due_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      billing_address_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ConsumerAddresses", // Assuming a separate "ConsumerAddresses" table
          key: "id",
        },
      },
      total_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      tax_amount: {
        type: Sequelize.DECIMAL(10, 2),
      },
      discount_amount: {
        type: Sequelize.DECIMAL(10, 2),
      },
      amount_paid: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0.0,
      },
      payment_status: {
        type: Sequelize.ENUM("paid", "partially_paid", "unpaid"),
        allowNull: false,
      },
      invoice_status: {
        type: Sequelize.ENUM("issued", "sent", "overdue"),
        allowNull: false,
      },
      payment_method: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Invoices");
  },
};
