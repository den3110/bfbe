'use strict';
module.exports = (sequelize, DataTypes) => {
  const voucher = sequelize.define('voucher', {
    discount : DataTypes.INTEGER,
    expire: DataTypes.STRING,
    code: DataTypes.STRING
  }, {});
  return voucher;
};