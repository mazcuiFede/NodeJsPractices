'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Contacts", [{
      firstname: 'matias',
      lastname: 'azcui',
      phone: '123123123',
      email: 'matias.azcui@gmail.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }])
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
