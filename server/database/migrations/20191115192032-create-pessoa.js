'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('pessoas', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        no_pessoa: {
          type: Sequelize.STRING(255)
        },
        no_email: {
          type: Sequelize.STRING(255)
        },
        endereco: {
          type: Sequelize.TEXT
        },
        sexo: {
          type: Sequelize.CHAR
        },
        ic_ativo: {
          type: Sequelize.BOOLEAN
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pessoas');
  }
}
