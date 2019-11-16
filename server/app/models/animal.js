'use strict';
module.exports = (sequelize, DataTypes) => {
  const animal = sequelize.define('Animal', {
    id_pessoa: DataTypes.INTEGER,
    id_fazenda: DataTypes.INTEGER,
    no_animal: DataTypes.STRING,
    no_raca: DataTypes.STRING,
    sexo: DataTypes.CHAR,
    vr_peso: DataTypes.FLOAT,
    dt_nascimento: DataTypes.DATE
  }, {
    underscored: true,
  });
  animal.associate = function(models) {
    // associations can be defined here
  };
  return animal;
};
