module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Teachers', {
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
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'class_id'
    },
    teacher_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'teacher_name'
    },
  })
}