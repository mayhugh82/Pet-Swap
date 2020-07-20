'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Sitters", [
      {
        name: "Diana",
        photo: "",
        city: "Kansas",
        state: "KS",
        email: "diana@earthlink.com",
        duration: "3",
        quantity: 3,
        size: "3",
        temperament: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
