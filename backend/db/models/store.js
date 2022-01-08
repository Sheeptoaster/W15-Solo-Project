'use strict';
module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
      },
    },
    description: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Store.associate = function(models) {
    // associations can be defined here
    Store.hasMany(models.Drink, { foreignKey: 'storeId' });
    Store.hasMany(models.Checkin, { foreignKey: 'storeId' });
  };
  return Store;
};
