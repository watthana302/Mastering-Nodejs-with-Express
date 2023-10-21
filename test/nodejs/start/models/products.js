const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING
  },
  imageURL: {
    type: DataTypes.STRING
  },
  type: {
    type: DataTypes.STRING
  },
  post: {
    type: DataTypes.STRING
  },
  
});

module.exports = Product;
