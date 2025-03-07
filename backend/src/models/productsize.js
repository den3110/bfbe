'use strict';
module.exports = (sequelize, DataTypes) => {
  const productsize = sequelize.define('productsize', {
    productId: DataTypes.INTEGER,
    size: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {});
  productsize.associate = function(models) {
    // associations can be defined here
    models.productsize.belongsTo(models.product, { foreignKey: 'productId' });

  };
  return productsize;
};