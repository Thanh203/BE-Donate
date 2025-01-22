'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('accounts', {
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        primaryKey: true, // Email là khóa chính
      },
      password: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      createat: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updateat: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('accounts');
  }
};
