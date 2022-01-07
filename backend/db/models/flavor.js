'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flavor = sequelize.define('Flavor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Flavor.associate = function(models) {
    // associations can be defined here
    Flavor.belongsToMany(models.Drink, {
      through: 'FlavorJoin',
      otherKey: 'drinkId',
      foreignKey: 'flavorId'
    });
  };
  return Flavor;
};
