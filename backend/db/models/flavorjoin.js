'use strict';
module.exports = (sequelize, DataTypes) => {
  const FlavorJoin = sequelize.define('FlavorJoin', {
    drinkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    flavorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  FlavorJoin.associate = function(models) {
    // associations can be defined here
  };
  return FlavorJoin;
};
