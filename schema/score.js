module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Scores', {
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
    cj: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'cj'
    },
  })
}