'use strict';
module.exports = (sequelize, DataTypes) => {
  const AnimalLote = sequelize.define('AnimalLote', {
    id_animal: DataTypes.INTEGER,
    id_lote: DataTypes.INTEGER,
    dt_entrada: DataTypes.DATE,
    dt_saida: DataTypes.DATE,
    dt_ultima_movimentacao: DataTypes.DATE,
    ic_bezerro: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  AnimalLote.associate = function(models) {
    // associations can be defined here
  };
  return AnimalLote;
};
