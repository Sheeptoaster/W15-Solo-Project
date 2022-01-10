'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stores', [
      {
        ownerId: 1,
        name: 'St. James Gate',
        description: 'St. James\'s Gate Brewery is a brewery founded in 1759 in Dublin, Ireland, by Arthur Guinness. The company is now a part of Diageo, a company formed from the merger of Guinness and Grand Metropolitan in 1997. The main product of the brewery is Guinness Draught.',
        location: 'Dublin, Ireland',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stores', null, {});
  }
};
