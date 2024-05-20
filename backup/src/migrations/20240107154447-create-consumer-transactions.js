"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("ConsumerTransactions", "customerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Consumer",
        key: "id",
      },
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("ConsumerTransactions", "customerId", {
      type: Sequelize.INTEGER,
    });
  },
};
