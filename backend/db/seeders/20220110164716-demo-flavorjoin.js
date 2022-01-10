'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FlavorJoins', [
      {
        drinkId: 1,
        flavorId: 3,
      },
      {
        drinkId: 1,
        flavorId: 2,
      },
      {
        drinkId: 1,
        flavorId: 4,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('FlavorJoins', null, {});
  }
};
