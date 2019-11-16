'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define('Pessoa', {
    no_pessoa: DataTypes.STRING,
    no_email: DataTypes.STRING,
    endereco: DataTypes.TEXT,
    sexo: DataTypes.STRING,
    ic_ativo: DataTypes.BOOLEAN
  }, {});
  Pessoa.associate = function(models) {
    Pessoa.hasMany(models.Animal, {
      foreignKey: 'id_pessoa',
      as: 'animais',
      tableName: 'animais',
      underscored: true,
    })
  };
  return Pessoa;
};
