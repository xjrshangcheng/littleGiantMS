'use strict';

module.exports = {
  up: function (migration, DataTypes) {
    migration.changeColumn(
        'goods',
        'more_img',
        {
          type: DataTypes.STRING(5000)
        }
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
