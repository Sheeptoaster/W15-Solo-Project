'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Drinks', [
      {
        userId: 1,
        storeId: 1,
        name: 'Guinness',
        description: 'Dry Irish stout that originated in the brewery of Arthur Guinness at St. James\'s Gate in Dublin, Ireland in 1759.',
        imageUrl: 'https://img.favpng.com/13/23/15/guinness-beer-stout-india-pale-ale-png-favpng-eP0T1kpUTABB86PwirEG5YBfp.jpg',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Drinks', null, {});
  }
};
