const db = require('../config/db');
const Sequelize = db.sequelize;

class QueryController {
  static async grades(ctx) {
    try {
      let data = await Sequelize.query(`SELECT Grades.grade_id,trim(Grades.grade_name) as grade_name FROM Grades`)
      ctx.response.status = 200;
      ctx.body = data[0]
    } catch (err) {
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: '查询失败',
      }
    }
  }

  static async exams(ctx) {
    try {
      let data = await Sequelize.query(`SELECT grade_id,exam_id,trim(exam_title) as exam_title,exam_type,low_seg_course,low_seg_total from Exams`)
      ctx.response.status = 200;
      ctx.body = data[0]
    } catch (err) {
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: '查询失败',
      }
    }
  }

  static async classes(ctx) {
    try {
      let data = await Sequelize.query(`SELECT grade_id,class_id,trim(class_name) as class_name,manager_name FROM Classes`)
      ctx.response.status = 200;
      ctx.body = data[0]
    } catch (err) {
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: '查询失败',
      }
    }
  }

  static async courses(ctx) {
    try {
      let data = await Sequelize.query(`SELECT grade_id,exam_id,course_id,trim(course_name) as course_name,max from Courses`)
      ctx.response.status = 200;
      ctx.body = data[0]
    } catch (err) {
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: '查询失败',
      }
    }
  }
  //-----------------------------
  static async scorelist(ctx) {
    let grade_id = ctx.params.grade_id
    let exam_id = ctx.params.exam_id
    let class_id = ctx.params.class_id

    try {
      let data = await Sequelize.query(`call scores_list_by_grade_class_exam(${grade_id},${class_id},${exam_id})`)
      ctx.response.status = 200;
      ctx.body = data
    } catch (err) {
      ctx.response.status = 412;
      ctx.body = {
        status: 412,
        statusText: 'OK',
      }
    }
  }

  static async statcourse(ctx) {
    let exam_id = ctx.params.exam_id
    let grade_id = ctx.params.grade_id
    let course_id = ctx.params.course_id

    try {
      let data = await Sequelize.query(`call sp_stat_course(${exam_id},${grade_id},${course_id})`)
      ctx.response.status = 200;
      ctx.body = data
    } catch (err) {
      ctx.response.status = 412;
      ctx.body = {
        status: 412,
        statusText: '查询失败',
      }
    }
  }

  static async stattotal(ctx) {
    let exam_id = ctx.params.exam_id
    let grade_id = ctx.params.grade_id

    try {
      let data = await Sequelize.query(`call sp_stat_total(${exam_id},${grade_id})`)
      ctx.response.status = 200;
      ctx.body = data
    } catch (err) {
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: '查询失败',
      }
    }
  }
  //-----------------------------------------
  static async grade_examlist(ctx) {
    // let grade_id = ctx.params.grade_id
    try {
      let data = await Sequelize.query(`SELECT Grades.grade_id,trim(Grades.grade_name) as grade_name,Exams.exam_id,trim(Exams.exam_title) as exam_title FROM Grades INNER JOIN Exams ON Grades.grade_id = Exams.grade_id`)
      ctx.response.status = 200;
      ctx.body = data[0]
    } catch (err) {
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: '查询失败',
      }
    }
  }

  static async grade_classlist(ctx) {
    try {
      let data = await Sequelize.query(`SELECT Grades.grade_id,trim(Grades.grade_name) as grade_name,Classes.class_id,trim(Classes.class_name) as class_name FROM Grades INNER JOIN Classes ON Grades.grade_id = Classes.grade_id`)
      ctx.response.status = 200;
      ctx.body = data[0]
    } catch (err) {
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: '查询失败',
      }
    }
  }

  static async grade_exam_courselist(ctx) {
    try {
      let data = await Sequelize.query(`SELECT Grades.grade_id,trim(Grades.grade_name) as grade_name,Exams.exam_id,trim(Exams.exam_title) as exam_title, Courses.course_id,trim(Courses.course_name) as course_name from  Grades 
      INNER JOIN Exams ON Grades.grade_id = Exams.grade_id
      INNER JOIN Courses ON  Grades.grade_id = Courses.grade_id  and Exams.exam_id=Courses.exam_id`)
      ctx.response.status = 200;
      ctx.body = data[0]
    } catch (err) {
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: '查询失败',
      }
    }
  }

}
module.exports = QueryController