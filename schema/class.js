module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Classes', {
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
    class_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'class_name',
    },
    manager_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'manager_name',
    },
  })
}