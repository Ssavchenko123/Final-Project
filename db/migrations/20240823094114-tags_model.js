module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('post_tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      post_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'posts',
          key: 'id',
        },
      },
      tag_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'tags',
          key: 'id',
        },
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
    return queryInterface.dropTable('post_tags');
  },
};
