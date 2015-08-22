'use strict';

module.exports = {
  up: function (migration, Sequelize) {
      migration.addColumn(
          'goods',
          'status',
          Sequelize.INTEGER
      )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
