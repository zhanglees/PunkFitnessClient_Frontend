// pages/evaluation/dynamicDetail/dynamicDetail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow0: true,
    isShow1: true,
    duration: '',
    videoIndex: '',
    userId: '09cc20bc-3e3e-46bd-bcb2-d7a85bbf68be',
    coachId: 'f15371d7-975b-4ae9-98fb-df54453ef0a5',
    createTime: '2021-12-30 11:12:17',
    assessmentType: 0,
    detailList:[]
  },

  getLength(e) {
    // console.log(e);
    e.detail.duration = parseInt(e.detail.duration)
    //处理时间格式并存放到data中
    this.setData({
      duration: parseInt(e.detail.duration / 60) + ":" + e.detail.duration % 60
    })
  },

  triggerPause() {
    this.videoContext.play()
  },
  // 获取详情
  getDetail() {
    const { userId, coachId, createTime, assessmentType } = this.data
    app.req.api.getTrainerAssessmentDetail({
      assessmentType,
      coachId,
      createTime,
      userId
    }).then((res) => {
      console.log('详情', res);
      this.setData({
        detailList:res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.createVideoContext = wx.createVideoContext('video_player')
    const { coachId, createTime, assessmentType } = options
    this.data.userId = wx.getStorageSync('userInfo').id;
    this.data.createTime = createTime;
    this.data.coachId = coachId;
    this.data.assessmentType = assessmentType;
    this.getDetail()
  },

  videoPlay(e) {
    // console.log('开始播放', e.currentTarget.dataset.i)
    var videoplay = wx.createVideoContext(`video${e.currentTarget.dataset.i}`,this)
      videoplay.play()
      wx.createVideoContext(`video${e.currentTarget.dataset.i}`).requestFullScreen({ direction: 90 });
     // this.setData({
    //   isShow: !this.data.isShow
    // })
  },

  // 暂停播放
  videoPause(e) {
    var videoplay = wx.createVideoContext('video${e.currentTarget.dataset.i}')
    videoplay.pause()
    this.setData({
      isShow: true
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