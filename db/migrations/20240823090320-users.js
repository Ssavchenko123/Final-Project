'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        validate: {
          len: [0, 255],
        },
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          len: [0, 255],
        },
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down(queryInterface) {
    return queryInterface.dropTable('users');
  },
};
