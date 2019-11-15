'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('pessoa', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        no_pessoa: {
          allowNull: false,
          type: Sequelize.STRING(255)
        },
        no_email: {
          allowNull: false,
          type: Sequelize.STRING(255)
        },
        endereco: {
          allowNull: false,
          type: Sequelize.TEXT
        },
        sexo: {
          allowNull: false,
          type: Sequelize.CHAR
        },
        ic_ativo: {
          allowNull: false,
          type: Sequelize.BOOLEAN
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updated_at: Sequelize.DATE,
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pessoa');
  }
}
