module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Classes', {
    index: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'index'
    },
    route: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'route',
    },
    ex_route: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'ex_route',
    },
    txt: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'txt',
    },
  })
}