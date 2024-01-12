module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Vendors", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      vendorId: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      vendorName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      addressId: {
        type: Sequelize.INTEGER,
        references: {
          model: "VendorAddresses",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      contactPerson: {
        type: Sequelize.STRING,
      },
      emailAddress: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      taxId: {
        type: Sequelize.STRING,
      },
      paymentTerms: {
        type: Sequelize.STRING,
      },
      preferredCurrency: {
        type: Sequelize.STRING,
      },
      productsServicesProvided: {
        type: Sequelize.TEXT,
      },
      leadTime: {
        type: Sequelize.INTEGER,
      },
      notesComments: {
        type: Sequelize.TEXT,
      },
      creationDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      lastUpdated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      totalStores: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      numberCategory: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      vendorImage: {
        type: Sequelize.STRING,
      },
      vendorDocuments: {
        type: Sequelize.TEXT,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Vendors");
  },
};
