// questionnaire overview.js
const app = getApp()
Page({
  data: {
    typeList: ['静态评估', '健康体适能', ],
    type: 0,
    userId: '',
    testList: [],

  },
  onLoad(options) {
    this.getList();
  },
  getList() {
    this.setData({
      [`testList[${0}]`]: [{
        coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
        coachName: "李教练",
        testType: 0,
        recordTime: "今天42分钟前"
      }, {
        coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
        coachName: "李教练",
        testType: 0,
        recordTime: "2022/05/07"
      }],
      [`testList[${1}]`]: [{
        coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
        coachName: "刘教练",
        testType: 1,
        recordTime: "2022/05/07"
      }, {
        coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
        coachName: "刘教练",
        testType: 1,
        recordTime: "2022/05/07"
      }, {
        coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
        coachName: "刘教练",
        testType: 1,
        recordTime: "2022/05/07"
      }],
      [`testList[${2}]`]: [{
        coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
        coachName: "张三三",
        testType: 2,
        recordTime: "2022/05/07"
      }, {
        coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
        coachName: "张三三",
        testType: 2,
        recordTime: "2022/05/07"
      }, {
        coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
        coachName: "张三三",
        testType: 2,
        recordTime: "2022/05/07"
      }]
    });
  },
  //查看详情
  gotoDetail(e) {
    const { testtype } = e.currentTarget.dataset
    console.log('评估测试', e, testtype);
    wx.navigateTo({
      url:testtype==0? '/pages/evaluation/staticDetail/staticDetail':'/pages/evaluation/physicalDetail/physicalDetail',
    })
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