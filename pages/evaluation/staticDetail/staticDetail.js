// pages/evaluation/staticDetail/staticDetail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    positiveList: {},//正面
    sideList: {}, //侧面
    userId: '052fdb81-8d72-40fd-ab1b-b8496d16aaab',
    coachId: 'f15371d7-975b-4ae9-98fb-df54453ef0a5',
    createTime: '2022-01-04 16:06:43',
    assessmentType: 0,
    list:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { coachId, createTime, assessmentType } = options
    this.data.userId = wx.getStorageSync('userInfo').id;
    this.data.createTime = createTime;
    this.data.coachId = coachId;
    this.data.assessmentType = assessmentType;
    this.getDetail()

  },
  getDetail() {
    const { userId, coachId, createTime, assessmentType } = this.data
    app.req.api.getTrainerAssessmentDetail({
      assessmentType,
      coachId,
      createTime,
      userId
    }).then((res) => {
      // console.log('详情',res);
      this.setData({
        list:res.data,
        sideList: res.data[0].assessmentName == '侧面' ? res.data[0] : res.data[1],
        positiveList: res.data[1].assessmentName == '侧面' ? res.data[0] : res.data[1]
      })
      // console.log('侧面', this.data.sideList);
      // console.log('正面', this.data.positiveList);
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