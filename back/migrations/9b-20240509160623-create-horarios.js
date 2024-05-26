'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('horarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      horaInicio: {
        allowNull: false,
        type: Sequelize.STRING(5)
      },
      horaFin: {
        allowNull: false,
        type: Sequelize.STRING(5)
      },
      dia:{
        allowNull: false,
        type: Sequelize.STRING(9)
      },
      idAula: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'aulas'
          },
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      idAsignatura:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'asignaturas'
            },
            key: 'id'
            },
            onDelete: 'CASCADE'
          
      },
      idCurso:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'cursos'
            },
            key: 'id'
            },
            onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('horarios');
  }
};