// questionnaire overview.js
const app = getApp()
Page({
  data: {
    typeList: ['静态评估', '健康体适能', '动态评估'],
    type: 0,
    userId: '',
    questionList: [],
    
  },
  onLoad(options) {
    this.getList();
  },
  getList() {
    this.setData({
      [`questionList[${0}]`]: [{
        coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
        coachName: "张教练",
        questionType: 1,
        recordTime: "今天42分钟前"
      }, {
        coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
        coachName: "张教练",
        questionType: 1,
        recordTime: "2022/05/07"
      }],
      [`questionList[${1}]`]: [{
        coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
        coachName: "张三三",
        questionType: 0,
        recordTime: "2022/05/07"
      }, {
        coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
        coachName: "张三三",
        questionType: 0,
        recordTime: "2022/05/07"
      }, {
        coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
        coachName: "张三三",
        questionType: 0,
        recordTime: "2022/05/07"
      }],
      [`questionList[${2}]`]: [{
        coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
        coachName: "张三三",
        questionType: 0,
        recordTime: "2022/05/07"
      }, {
        coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
        coachName: "张三三",
        questionType: 0,
        recordTime: "2022/05/07"
      }, {
        coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
        coachName: "张三三",
        questionType: 0,
        recordTime: "2022/05/07"
      }]
    });
  },
  //查看详情
  gotoDetail(e) {
 console.log('评估测试',e);
  },
  tabChange(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({
      type: type
    })
  },
  onShow() {
    this.getList();
  }
})