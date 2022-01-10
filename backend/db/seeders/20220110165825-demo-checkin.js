'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Checkins', [
      {
        userId: 1,
        drinkId: 1,
        storeId: 1,
        comment: 'Comment 1',
      },
      {
        userId: 2,
        drinkId: 1,
        storeId: 1,
        comment: 'Comment 2',
      },
      {
        userId: 3,
        drinkId: 1,
        storeId: 1,
        comment: 'Comment 3',
      },
      {
        userId: 1,
        drinkId: 1,
        storeId: 1,
        comment: 'Comment 4',
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Checkins', null, {});
  }
};
