'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('animais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pessoa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pessoas', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
      },
      id_fazenda: {
        type: Sequelize.INTEGER
      },
      no_animal: {
        type: Sequelize.STRING
      },
      no_raca: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.CHAR
      },
      vr_peso: {
        type: Sequelize.FLOAT
      },
      dt_nascimento: {
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('animais');
  }
};
