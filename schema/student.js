module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Students', {
    grade_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'grade_id'
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'class_id'
    },
    xh: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'xh'
    },
    name: {
      type: DataTypes.STRING(8),
      allowNull: false,
      field: 'name',
    },
    stat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'stat',
    },
    xjh: {
      type: DataTypes.STRING(12),
      allowNull: false,
      field: 'xjh',
    },
  })
}