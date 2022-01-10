'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stores', [
      {
        ownerId: 1,
        name: 'St. James Gate',
        description: 'St. James\'s Gate Brewery is a brewery founded in 1759 in Dublin, Ireland, by Arthur Guinness. The company is now a part of Diageo, a company formed from the merger of Guinness and Grand Metropolitan in 1997. The main product of the brewery is Guinness Draught.',
        location: 'Dublin, Ireland',
      },
      {
        ownerId: 2,
        name: 'The Blind Beggar',
        description: 'With one brutal murder already behind it, The Blind Beggar became even more notorious when in 1966 London mobster Ron Kray shot fellow mobster George Cornell as he nursed a gin and tonic at the bar. Built in 1894, it remains a favorite of celebs and locals.',
        location: 'London, England',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stores', null, {});
  }
};
