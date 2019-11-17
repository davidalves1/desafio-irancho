'use strict';
module.exports = (sequelize, DataTypes) => {
  const lote = sequelize.define('Lote', {
    no_lote: DataTypes.INTEGER,
    ds_lote: DataTypes.TEXT
  }, {
    underscored: true,
  });
  lote.associate = function(models) {
    // associations can be defined here
  };
  return lote;
};
