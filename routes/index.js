const router = require('koa-router')()

const GradeController = require('../controllers/grade')
router.post('/creategrade',GradeController.createOne)
router.get('/deletegrade/:grade_id',GradeController.deleteOne)
router.get('/getgrade/:grade_id',GradeController.getOne)
router.get('/getallgrade',GradeController.getAll)

//-----------------------QueryController--------------------------
const QueryController = require('../controllers/query')
router.get('/scorelist/:grade_id/:exam_id/:class_id',QueryController.scorelist)
router.get('/statcourse/:exam_id/:grade_id/:course_id',QueryController.statcourse)
router.get('/stattotal/:exam_id/:grade_id',QueryController.stattotal)

router.get('/grades/',QueryController.grades)
router.get('/exams/',QueryController.exams)
router.get('/classes/',QueryController.classes)
router.get('/courses/',QueryController.courses)

router.get('/grade_examlist/',QueryController.grade_examlist)
router.get('/grade_classlist/',QueryController.grade_classlist)
router.get('/grade_exam_courselist/',QueryController.grade_exam_courselist)

//--------------------lqController---------------------
const lqController = require('../controllers/lqQuery')
router.get('/getYearList',lqController.getYearList)
router.get('/getListZxYear/:year',lqController.getListZxYear)

module.exports = router
