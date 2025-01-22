'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('donates', [
      {
        name: 'Nguyen Van A',
        address: '123 Đường ABC, Hà Nội',
        amount: 1000000,
        holder: 'Nguyen Van B',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tran Thi B',
        address: '456 Đường XYZ, TP.HCM',
        amount: 2000000,
        holder: 'Tran Van C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Le Van C',
        address: '789 Đường DEF, Đà Nẵng',
        amount: 1500000,
        holder: 'Nguyen Van A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('donates', null, {});
  }
};
