module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Grades', {
    grade_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: 'grade_id'
    },
    grade_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'grade_name',
    },
    current_exam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'current_exam'
    },
  })
}