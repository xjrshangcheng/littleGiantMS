'use strict';

module.exports = {
  up: function (migration, DataTypes) {
    migration.changeColumn(
        'goods',
        'status',
        {
          type: DataTypes.STRING
        }
    ),
    migration.addColumn(
        'goods',
        'inventory',
        DataTypes.INTEGER
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
