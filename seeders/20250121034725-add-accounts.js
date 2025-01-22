'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('accounts', [
      {
        email: 'admin@gmail.com',
        password: 'xsn123', 
        createat: new Date(),
        updateat: new Date(),
      },
      {
        email: 'user2@example.com',
        password: 'password456',
        createat: new Date(),
        updateat: new Date(),
      },
      {
        email: 'user3@example.com',
        password: 'password789',
        createat: new Date(),
        updateat: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('accounts', null, {});
  }
};
