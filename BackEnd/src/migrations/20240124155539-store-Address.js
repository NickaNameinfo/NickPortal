module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("StoreAddresses", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      store_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Stores",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      store_name: {
        type: Sequelize.STRING,
      },
      street_address_1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street_address_2: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state_province: {
        type: Sequelize.STRING,
      },
      postal_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      creation_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      last_updated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      verified_date: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("StoreAddresses");
  },
};
