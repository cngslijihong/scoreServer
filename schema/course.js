module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Courses', {
    grade_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'grade_id'
    },
    exam_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'exam_id'
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'course_id'
    },
    course_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'course_name'
    },
    max: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'max'
    },
  })
}