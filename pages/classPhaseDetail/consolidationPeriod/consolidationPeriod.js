// pages/classPhaseDetail/consolidationPeriod/consolidationPeriod.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseData: [[],[],[]],
    type: 0,
    infoList: [{
      title: '全部课时',
      id: 'count',
    }, {
      title: '已上课时',
      id: 'sign',
    }, {
      title: '未上课时',
      id: 'last',
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {userTrainitemId, trainingPlanId, classId, coachId, className, coachName ,classIndex} = options;
    const userId = wx.getStorageSync('userInfo').id;
    wx.setNavigationBarTitle({
      title: className,
    })
    this.setData({
      type:classIndex
    })
    this.getClasses(userTrainitemId, trainingPlanId, classId, coachId, userId, coachName)
  },

  // 转换小导航
  transformAct(e) {
    // console.log('获取e',e.target.dataset.type);
    // 根据课时获取数据并修改li
    this.setData({
      type: e.target.dataset.type
    })
  },
  getClasses(userTrainitemId, trainingPlanId, classId, coachId, userId, coachName){
    app.req.api.getUserClassSection({
        classId,                         
        trainingPlanId,                   
        userId:'',                              
        userTrainitemId,                     
        coachId:''
    }).then(res=>{
      const data = res.data;
      let arr1=[], arr2=[];
      data.forEach(i=>{
          i.coachName = coachName;
        i.completeTime ? arr1.push(i) : arr2.push(i);
      })
      this.setData({
        courseData: [data, arr1, arr2]
      })
    })
  },
  // 跳转课时详情并携带id
  gotoClassDeatil(e) {
    const index = e.currentTarget.dataset.index;
    const {coachId, usertrainSectionId, sectionName, completeTime} = this.data.courseData[this.data.type][index];
    wx.navigateTo({
      url: '/pages/lesson/lesson'+ ('?coachId=' + coachId + '&usertrainSectionId=' + usertrainSectionId+ '&sectionName=' + sectionName + '&completeTime=' + completeTime),
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})