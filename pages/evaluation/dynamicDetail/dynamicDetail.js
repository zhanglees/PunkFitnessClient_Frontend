// pages/evaluation/dynamicDetail/dynamicDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // isShow: true,
    duration: ''
  },

  getLength(e) {
    console.log(e);
    e.detail.duration = parseInt(e.detail.duration)
    //处理时间格式并存放到data中
    this.setData({
      duration: parseInt(e.detail.duration / 60) + ":" + e.detail.duration % 60
    })
  },

  triggerPause() {
    this.videoContext.play()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.createVideoContext = wx.createVideoContext('video_player')
  },

  // videoPlay(e) {
  //   console.log('开始播放', e.currentTarget.dataset.i)
  //   var videoplay = wx.createVideoContext(`video${e.currentTarget.dataset.i}`,)
  //   videoplay.play()
  //   this.setData({
  //     isShow: false
  //   })

  // },

  // 暂停播放
  // videoPause(e) {
  
  //   var videoplay = wx.createVideoContext('video${e.currentTarget.dataset.i}')
  //   videoplay.pause()
  //   this.setData({
  //     isShow: true
  //   })
  // },

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