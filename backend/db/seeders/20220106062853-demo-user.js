'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        avatarUrl: 'https://bellfund.ca/wp-content/uploads/2018/03/demo-user.jpg',
        bio: 'This is the Demo User Bio!',
      },
      {
        email: 'fake1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password1'),
      },
      {
        email: 'fake2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password2'),
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
