const db = require('../config/lqDb');
const Sequelize = db.sequelize;

class lqController {
  static async getYearList(ctx) {
    try {
      let data = await Sequelize.query(`call getYearList()`)
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
  static async getListZxYear(ctx) {
    let year = ctx.params.year
    try {
      let data = await Sequelize.query(`call getListZxYear(1,${year})`)
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
}
module.exports = lqController