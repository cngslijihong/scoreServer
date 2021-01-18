const db = require('../config/db');
const Sequelize = db.sequelize;
//const Grade = Sequelize.import('../schema/grade');
// 自动创建表
//Grade.sync({ force: false });

class ScoreModel {
  static async scoreList (grade_id,class_id,exam_id) {
    return await Sequelize.query(`call scores_list_by_grade_class_exam(${grade_id},${class_id},${exam_id})`)
    // .then(data => {
    //   return data;  
    // })
    // .catch(error => {
    //   //  
    // });
    }
}

module.exports =ScoreModel