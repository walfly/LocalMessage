module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Message", {
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    Message: DataTypes.TEXT
  });
};