module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("VendorAddresses", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      vendorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Vendors",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "vendor_Id",
      },
      vendorName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "vendor_Name",
      },
      streetAddress1: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "street_Address1",
      },
      streetAddress2: {
        type: Sequelize.STRING,
        field: "street_Address2",
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stateProvidence: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "state_Providence",
      },
      postalCode: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "post_Code",
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      creationDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "creation_Date",
      },
      lastUpdated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "last_updated",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("VendorAddresses");
  },
};
