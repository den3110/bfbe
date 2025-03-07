'use strict';
module.exports = (sequelize, DataTypes) => {
  const setting = sequelize.define('setting', {
    mode_payment: DataTypes.BOOLEAN,
    client_key_demo: DataTypes.STRING,
    secret_key_demo: DataTypes.STRING,
    client_key_live: DataTypes.STRING,
    secret_key_live: DataTypes.STRING,
    discount: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    bank_name: DataTypes.STRING,
    bank_account: DataTypes.STRING,
    iban: DataTypes.STRING,
    bic: DataTypes.STRING,
  }, {});
  return setting;
};