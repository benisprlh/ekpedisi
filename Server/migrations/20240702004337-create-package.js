"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Packages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senderAddress: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      recipient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      recipientAddress: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      EkspedisiID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Ekspeditions",
          key: "id",
        },
      },
      status: {
        type: Sequelize.ENUM("Dikirim", "Dalam Perjalanan", "Tiba di Tujuan"),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Packages");
  },
};
