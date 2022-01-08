'use strict';
module.exports = (sequelize, DataTypes) => {
  const Drink = sequelize.define('Drink', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 25]
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING
    },
  }, {});
  Drink.associate = function (models) {
    // associations can be defined here
    Drink.hasMany(models.Checkin, { foreignKey: 'drinkId' });
    Drink.belongsToMany(models.Flavor, {
      through: 'FlavorJoin',
      otherKey: 'flavorId',
      foreignKey: 'drinkId'
    });
  };
  return Drink;
};
