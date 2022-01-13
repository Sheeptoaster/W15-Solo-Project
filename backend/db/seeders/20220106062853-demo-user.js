'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        avatarUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090332/profiles/demo-user_py36yq.jpg',
        bio: 'This is the Demo User Bio!',
      },
      {
        email: 'fake1@user.io',
        username: 'Earl Henderson',
        hashedPassword: bcrypt.hashSync('password1'),
        avatarUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090335/profiles/cat_mlkxkv.jpg',
        bio: 'Beer aficionado. Communicator. Web enthusiast. Friendly gamer. Infuriatingly humble alcohol nerd.',
      },
      {
        email: 'fake2@user.io',
        username: 'Bill Mills',
        hashedPassword: bcrypt.hashSync('password2'),
        avatarUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090333/profiles/parrot_twdwjb.jpg',
        bio: 'Tv enthusiast. Award-winning music guru. Amateur problem solver. Alcohol buff. Proud coffeeaholic.',
      },
      {
        email: 'fake3@user.io',
        username: 'Lori Berg',
        hashedPassword: bcrypt.hashSync('password3'),
        avatarUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090333/profiles/parrot_twdwjb.jpg',
        bio: 'Twitter lover. Devoted music junkie. Travel fan. Social media nerd. Award-winning web ninja',
      },
      {
        email: 'fake4@user.io',
        username: 'Keith McGee',
        hashedPassword: bcrypt.hashSync('password'),
        avatarUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090337/profiles/woodendoll_ujejib.jpg',
        bio: 'Coffee fanatic. Social media fanatic. Certified twitter practitioner.'
      },
      {
        email: 'fake5@user.io',
        username: 'John Casteel',
        hashedPassword: bcrypt.hashSync('password'),
        avatarUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090332/profiles/demo-avatar_mhhs8v.jpg',
        bio: 'Bacon trailblazer. Internet lover. Devoted problem solver. Passionate coffee nerd. Creator. Total beer aficionado.'
      },
      {
        email: 'fake6@user.io',
        username: 'Willie Rogers',
        hashedPassword: bcrypt.hashSync('password'),
        avatarUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090337/profiles/woodendoll_ujejib.jpg',
        bio: 'Friendly organizer. Wannabe communicator. Student. Hipster-friendly beer fan. Thinker.'
      },
      {
        email: 'fake7@user.io',
        username: 'Romona Gorman',
        hashedPassword: bcrypt.hashSync('password'),
        avatarUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090333/profiles/parrot_twdwjb.jpg',
        bio: 'Total music advocate. Pop culture aficionado. Extreme internet ninja. Tv guru. Alcohol buff. Friendly reader.'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
