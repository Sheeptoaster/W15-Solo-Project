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


      {
        drinkId: 2,
        flavorId: 1,
      },
      {
        drinkId: 2,
        flavorId: 2,
      },
      {
        drinkId: 2,
        flavorId: 3,
      },


      {
        drinkId: 3,
        flavorId: 3,
      },
      {
        drinkId: 3,
        flavorId: 2,
      },
      {
        drinkId: 3,
        flavorId: 4,
      },


      {
        drinkId: 4,
        flavorId: 3,
      },
      {
        drinkId: 4,
        flavorId: 1,
      },


      {
        drinkId: 5,
        flavorId: 3,
      },
      {
        drinkId: 5,
        flavorId: 6,
      },
      {
        drinkId: 5,
        flavorId: 3,
      },
      {
        drinkId: 5,
        flavorId: 2,
      },


      {
        drinkId: 6,
        flavorId: 1,
      },
      {
        drinkId: 6,
        flavorId: 2,
      },
      {
        drinkId: 6,
        flavorId: 6,
      },


      {
        drinkId: 7,
        flavorId: 3,
      },
      {
        drinkId: 7,
        flavorId: 6,
      },
      {
        drinkId: 7,
        flavorId: 1,
      },


      {
        drinkId: 8,
        flavorId: 3,
      },
      {
        drinkId: 8,
        flavorId: 6,
      },


      {
        drinkId: 9,
        flavorId: 7,
      },
      {
        drinkId: 9,
        flavorId: 1,
      },
      {
        drinkId: 9,
        flavorId: 2,
      },


      {
        drinkId: 10,
        flavorId: 3,
      },
      {
        drinkId: 10,
        flavorId: 2,
      },
      {
        drinkId: 10,
        flavorId: 4,
      },
      {
        drinkId: 10,
        flavorId: 6,
      },


      {
        drinkId: 11,
        flavorId: 6,
      },
      {
        drinkId: 11,
        flavorId: 2,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('FlavorJoins', null, {});
  }
};
