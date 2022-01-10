'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flavors', [
      {
        name: 'Crisp & Clean',
      },
      {
        name: 'Hoppy & Bitter',
      },
      {
        name: 'Malt & Sweet',
      },
      {
        name: 'Dark & Roasty',
      },
      {
        name: 'Smokey',
      },
      {
        name: 'Fruit & Spice',
      },
      {
        name: 'Sour, Tart & Funky',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Flavors', null, {});
  }
};
