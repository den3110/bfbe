'use strict';
module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define('contact', {
    name: DataTypes.STRING,
    date_send: DataTypes.STRING,
    phone: DataTypes.STRING,
    content: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.STRING,
    reply_text: DataTypes.STRING,
    user_reply: DataTypes.INTEGER
  }, {});
  return contact;
};