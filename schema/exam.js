module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Exams', {
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
    exam_title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'exam_title'
    },
    exam_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'exam_type'
    },
    low_seg_course: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'low_seg_course'
    },
    low_seg_total: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'low_seg_total'
    },
  })
}