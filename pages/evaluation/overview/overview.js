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
    // coachList:[],
    coachId:''

  },

  // 子传父
  selcetCoach (e) {
    this.setData({
      coachId: e.detail.coachName
    })
    console.log(e.detail);
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
      // this.getCoachAllList()
    }
  },

  // 获取列表
  getTestList(typeId) {
    app.req.api.getTrainersAssessmentList(typeId).then((res) => {
      console.log('测试列表', res);
      this.setData({
        [`testList[${typeId}]`]: res.data
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
    // this.getCoachAllList()
  }
})