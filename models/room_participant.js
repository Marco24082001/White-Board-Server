'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room_participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, { onDelete: 'cascade', foreignKey: 'userId'});
      this.belongsTo(models.Rooms, { onDelete: 'cascade', foreignKey: 'roomId'});
    }
  };
  Room_participant.init({
    roomId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Room_participant',
  });
  return Room_participant;
};