module.exports = (sequelize, DataTypes) => {
  const Example = sequelize.define('Example', {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};
