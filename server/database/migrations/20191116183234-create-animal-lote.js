'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('animal_lotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_animal: {
        type: Sequelize.INTEGER
      },
      id_lote: {
        type: Sequelize.INTEGER
      },
      dt_entrada: {
        type: Sequelize.DATE
      },
      dt_saida: {
        type: Sequelize.DATE
      },
      dt_ultima_movimentacao: {
        type: Sequelize.DATE
      },
      ic_bezerro: {
        type: Sequelize.INTEGER
      },
      created_at: {
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
    return queryInterface.dropTable('AnimalLotes');
  }
};
