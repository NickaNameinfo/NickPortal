"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ConsumerTransactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      transactionConsumerId: {
        type: Sequelize.INTEGER,
        field: "transaction_consumer_id",
      },
      transactionId: {
        type: Sequelize.INTEGER,
        field: "transaction_id",
      },
      customerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Consumer",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "customer_id",
      },
      transactionDate: {
        type: Sequelize.DATE,
        field: "transaction_date",
      },
      totalAmount: {
        type: Sequelize.DECIMAL,
        field: "total_amount",
      },
      paymentMethod: {
        type: Sequelize.STRING,
        field: "payment_method",
      },
      paymentStatus: {
        type: Sequelize.STRING,
        field: "payment_status",
      },
      invoiceNumber: {
        type: Sequelize.STRING,
        field: "invoice_number",
      },
      notes: {
        type: Sequelize.TEXT,
        field: "notes",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ConsumerTransactions");
  },
};
