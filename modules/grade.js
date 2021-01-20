const db = require('../config/db');
const Sequelize = db.sequelize;
const Grade = Sequelize.import('../schema/grade');
// 自动创建表
Grade.sync({
  force: false
});

class GradeModel {
  static async createOne(data) {
    return await Grade.create({
      grade_id: data.grade_id,
      grade_name: data.grade_name,
      current_exam: data.current_exam,
    })
  }

  static async getAll(grade_id) {
    return await Grade.findAll()
  }

  static async getOne(grade_id) {
    return await Grade.findAll({
      where: {
        grade_id
      }
    })
  }

  static async deleteOne(grade_id) {
    return await Grade.destroy({
      where: {
        grade_id
      }
    })
  }

  static async update(grade_id, grade_name,current_exam) {
    Grade.findOne({
        where: {
          grade_id
        }
      })
      .then(grade => {
        grade.grade_name = grade_name;
        grade.current_exam = current_exam;
        grade.save()
        .then( ()=> {
          // done
        });
      });
  }

}

module.exports = GradeModel