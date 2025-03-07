'use strict';
module.exports = (sequelize, DataTypes) => {
  const voucherschedule = sequelize.define('voucherschedule', {
    date_start : DataTypes.STRING,
    date_end: DataTypes.STRING,
    amount_voucher: DataTypes.INTEGER
  }, {});
  
  return voucherschedule;
};