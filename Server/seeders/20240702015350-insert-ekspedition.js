"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Ekspeditions",
      [
        { name: "JNE", createdAt: new Date(), updatedAt: new Date() },
        { name: "JNT", createdAt: new Date(), updatedAt: new Date() },
        { name: "POS", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Ekspeditions", null, {});
  },
};
