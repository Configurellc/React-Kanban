module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define("Card", {
    title: DataTypes.STRING,
    priority: DataTypes.STRING,
    created_by: DataTypes.STRING,
    assigned_to: DataTypes.STRING

  });

  return Card;
  };
