'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stores', [
      {
        ownerId: 1,
        name: 'Salmon Guru',
        description: 'Adventurous international dishes are served alongside funky cocktails at this dark, retro-style bar.',
        location: 'Madrid, Spain',
      },
      {
        ownerId: 2,
        name: 'Katana Kitten',
        description: 'Cool, bi-level bar serving izakaya fare & traditional American bites, plus whimsical cocktails.',
        location: 'New York, New York',
      },
      {
        ownerId: 3,
        name: 'Dante',
        description: 'With one brutal murder already behind it, The Blind Beggar became even more notorious when in 1966 London mobster Ron Kray shot fellow mobster George Cornell as he nursed a gin and tonic at the bar. Built in 1894, it remains a favorite of celebs and locals.',
        location: 'London, England',
      },
      {
        ownerId: 2,
        name: 'Drink Kong',
        description: 'Hip cocktail bar with a decor inspired by Japanese street style serving a mood-based drinks menu.',
        location: 'Rome, Italy',
      },
      {
        ownerId: 2,
        name: 'Presidente',
        description: 'Glamorous, old-world cocktail lounge with tastings, classic bar bites & a lively vibe.',
        location: 'Buenos Aires, Argentina',
      },
      {
        ownerId: 2,
        name: 'Paradiso',
        description: 'Dramatic, dimly lit haunt offering imaginative cocktails & classic bar bites, plus mixology classes.',
        location: 'Barcelona, Spain',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stores', null, {});
  }
};
