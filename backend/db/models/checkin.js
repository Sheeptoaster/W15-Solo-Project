'use strict';
module.exports = (sequelize, DataTypes) => {
  const Checkin = sequelize.define('Checkin', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    drinkId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING
    },
  }, {});
  Checkin.associate = function(models) {
    // associations can be defined here
    Checkin.belongsTo(models.User, { foreignKey: 'userId' });
    Checkin.belongsTo(models.Store, { foreignKey: 'storeId' });
    Checkin.belongsTo(models.Drink, { foreignKey: 'drinkId' });
  };
  return Checkin;
};
