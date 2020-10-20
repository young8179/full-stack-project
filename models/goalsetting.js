'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GoalSetting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    GoalSetting.belongsTo(models.User)
    }
  };
  GoalSetting.init({
    goal_name: DataTypes.STRING,
    saving_goal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GoalSetting',
  });
  return GoalSetting;
};