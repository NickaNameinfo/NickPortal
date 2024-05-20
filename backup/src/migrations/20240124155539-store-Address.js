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
        field: "store_ID",
      },
      store_name: {
        type: Sequelize.STRING,
        field: "store_name",
      },
      street_address_1: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "street_address1",
      },
      street_address_2: {
        type: Sequelize.STRING,
        field: "street_address2",
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state_province: {
        type: Sequelize.STRING,
        field: "state_province",
      },
      postal_code: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "postal_code",
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
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
      verified_date: {
        type: Sequelize.DATE,
        field: "verified_date",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("StoreAddresses");
  },
};
