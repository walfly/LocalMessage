module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Message", {
    latitude: DataTypes.DECIMAL(10,7),
    longitude: DataTypes.DECIMAL(10,7),
    username: DataTypes.STRING,
    message: DataTypes.TEXT
  });
};