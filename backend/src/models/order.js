'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    custId: DataTypes.INTEGER,
    number: DataTypes.STRING,
    paymentmethod: DataTypes.STRING,
    deliverydate: DataTypes.DATE,
    grandtotal: DataTypes.FLOAT,
    status: DataTypes.STRING,
    voucherId: DataTypes.INTEGER,
    deliveryFee: DataTypes.INTEGER,
    reason: DataTypes.STRING,
    unit: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    models.Order.hasMany(models.Address, { foreignKey: 'orderId' });
    models.Order.hasMany(models.Cart, { foreignKey: 'orderId' });

    // models.Order.hasMany(models.payment, { foreignKey: 'orderCreationId' });  

  };
  return Order;
};