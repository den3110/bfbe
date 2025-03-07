'use strict';
module.exports = (sequelize, DataTypes) => {
  const vouchercustomer = sequelize.define('vouchercustomer', {
    customerId: DataTypes.INTEGER,
    voucherId: DataTypes.INTEGER,
    is_use: false
  }, {});
  vouchercustomer.associate = function(models) {
    // associations can be defined here
    models.customer.belongsToMany(models.voucher, { through: models.vouchercustomer });
    models.voucher.belongsToMany(models.customer, { through: models.vouchercustomer });

  };
  return vouchercustomer;
};