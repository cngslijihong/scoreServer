const GradeModel = require('../modules/grade')

class GradeController {
  static createOne (ctx) {
    // 接收客服端
    let req = ctx.request.body;
    if (req.grade_id 
      && req.grade_name 
    ) {
      try {
        GradeModel.createOne(req);
        ctx.response.status = 200;
        ctx.body = {
          msg: '创Address成功',
        }
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          msg: '创建Address失败',
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        msg: '参数不齐全',
        code:416
      }
    }

  }

  static async getAll (ctx) {
    let grade_id = ctx.params.grade_id
    try {
      let data = await GradeModel.getAll();
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

  static async getOne (ctx) {
    let grade_id = ctx.params.grade_id
    try {
      let data = await GradeModel.getOne(grade_id);
      // let data2 = await AddressModel.getAddress();
      ctx.response.status = 200;
      ctx.body = {
        code: 200,
        msg: '查询成功',
        data,
        // data2
      }

    } catch (err) {
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: '查询失败',
      }
    }
  }
  //删除方法
  static async deleteOne (ctx) {
    let id = ctx.params.grade_id
    try {
      let data = await GradeModel.deleteOne(grade_id);
      // let data2 = await AddressModel.getAddress();
      ctx.response.status = 200;
      ctx.body = {
        code: 200,
        msg: '删除成功',
        data,
        // data2
      }

    } catch (err) {
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: '删除失败',
      }
    }
  }
}

module.exports = GradeController