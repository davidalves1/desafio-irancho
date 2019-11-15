'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('animal', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        id_pessoa: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'pessoa', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
        },
        id_fazenda: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        no_animal: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        no_raca: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        sexo: {
          type: Sequelize.CHAR,
          allowNull: false,
        },
        vr_peso: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        dt_nascimento: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updated_at: Sequelize.DATE,
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('animal');
  }
};
