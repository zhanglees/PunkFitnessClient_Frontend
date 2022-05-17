// questionnaire overview.js
import * as watch from "../../../utils/watch.js";
const app = getApp()
Page({
  data: {
    // typeList: ['静态评估', '健康体适能', '动态评估'],
    typeList: [
      {
        name: '静态评估',
        id: 0
      },
      {
        name: '健康体适能',
        id: 2
      }, {
        name: '动态评估',
        id: 1
      },],
    type: 0, //tab样式
    userId: '',
    testList: [],
    typeId: 0, //获取数据分类type
    userId: '052fdb81-8d72-40fd-ab1b-b8496d16aaab',
    coachList:[]

  },
  onLoad(options) {
    watch.setWatcher(this);
    // this.data.userId = wx.getStorageSync('userInfo').id;
    // this.getList();
  },
  watch: {
    typeId: function (newVal, oldVal) {
      console.log(newVal, oldVal);
      this.getTestList(newVal)
      this.getCoachAllList()
    }
  },
  // getList() {
  //   this.setData({
  //     [`testList[${0}]`]: [{
  //       coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
  //       coachName: "李教练",
  //       testType: 0,
  //       recordTime: "今天42分钟前"
  //     }, {
  //       coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
  //       coachName: "李教练",
  //       testType: 0,
  //       recordTime: "2022/05/07"
  //     }],
  //     [`testList[${1}]`]: [{
  //       coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
  //       coachName: "刘教练",
  //       testType: 1,
  //       recordTime: "2022/05/07"
  //     }, {
  //       coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
  //       coachName: "刘教练",
  //       testType: 1,
  //       recordTime: "2022/05/07"
  //     }, {
  //       coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
  //       coachName: "刘教练",
  //       testType: 1,
  //       recordTime: "2022/05/07"
  //     }],
  //     [`testList[${2}]`]: [{
  //       coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
  //       coachName: "张三三",
  //       testType: 2,
  //       recordTime: "2022/05/07"
  //     }, {
  //       coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
  //       coachName: "张三三",
  //       testType: 2,
  //       recordTime: "2022/05/07"
  //     }, {
  //       coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
  //       coachName: "张三三",
  //       testType: 2,
  //       recordTime: "2022/05/07"
  //     }]
  //   });
  // },

  // 获取列表
  getTestList(typeId) {
    app.req.api.getTrainersAssessmentList(typeId).then((res) => {
      console.log('测试列表', res);
      this.setData({
        [`testList[${typeId}]`]: res.data
      })
    })
  },

  // 得到全部教练
  getCoachAllList() {
    const { userId, typeId } = this.data
    app.req.api.getTrainerAssessmentByRecordList({
      userId,
      assessmentType:typeId
    }).then((res) => {
      console.log('全部教练', res);
      this.setData({
        coachList:res.data
      })
    })
  },


  //查看详情
  gotoDetail(e) {
    const { index, testtype } = e.currentTarget.dataset
    const data = this.data.testList[testtype][index];
    // console.log('评估测试', e, testtype,data);

    // wx.navigateTo({
    //   url:testtype==0? '/pages/evaluation/staticDetail/staticDetail':'/pages/evaluation/physicalDetail/physicalDetail',
    // })
    wx: if (testtype == 0) {
      wx.navigateTo({
        url: `/pages/evaluation/staticDetail/staticDetail?coachId=${data.coachId}&createTime=${data.createTime}&assessmentType=${data.assessmentType}`,
      })
    }
    wx: if (testtype == 2) {
      wx.navigateTo({
        url: `/pages/evaluation/physicalDetail/physicalDetail?coachId=${data.coachId}&createTime=${data.createTime}&assessmentType=${data.assessmentType}`,
      })
    }
    wx: if (testtype == 1) {
      wx.navigateTo({
        url: `/pages/evaluation/dynamicDetail/dynamicDetail?coachId=${data.coachId}&createTime=${data.createTime}&assessmentType=${data.assessmentType}`,

        // url: `/pages/evaluation/demo/demo?coachId=${data.coachId}&createTime=${data.createTime}&assessmentType=${data.assessmentType}`,
      })
    }

  },
  tabChange(e) {
    const { type, typeid } = e.currentTarget.dataset;
    console.log(e.currentTarget.dataset);
    this.setData({
      type: type,
      typeId: typeid
    })
  },
  onShow() {
    // this.getList();
    this.getTestList(0)
    this.getCoachAllList()
  }
})