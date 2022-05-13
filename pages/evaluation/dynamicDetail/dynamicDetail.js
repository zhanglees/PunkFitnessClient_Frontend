// pages/evaluation/dynamicDetail/dynamicDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: [true, false],
    duration: '',
    videoIndex: ''
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.createVideoContext = wx.createVideoContext('video_player')
  },

  // videoPlay(e) {
  //   // console.log('开始播放', e.currentTarget.dataset.i)
  //   var videoplay = wx.createVideoContext(`video${e.currentTarget.dataset.i}`,this)
  //   console.log(this);
  //   wx: if (!this.data.isShow) {
  //     videoplay.play()
  //   }
  //   this.setData({
  //     isShow: !this.data.isShow
  //   })
  //   wx: if (!this.data.isShow) {
  //     videoplay.pause()
  //   }
  //   // this.setData({
  //   //   isShow: !this.data.isShow
  //   // })


  // },


  videoPlay(event) {
    // var index = video.getDataSet(event, 'index'); 
    console.log('000', this.data.isShow[event.currentTarget.dataset.i]);
    if (this.data.isShow[event.currentTarget.dataset.i] == undefined) {
      this.data.isShow.splice(event.currentTarget.dataset.i,true)
      console.log('this',this.data.isShow);
    }
    if (!this.data.videoIndex && this.data.videoIndex != 0) { // 没有播放时播放视频
      this.setData({
        videoIndex: event.currentTarget.dataset.i
      })
      //  console.log(!this.data.videoIndex);
      var videoContext = wx.createVideoContext('video' + event.currentTarget.dataset.i)
      // videoContext.requestFullScreen({ direction: 90 })
      videoContext.play()
    } else {
      var videoContextPrev = wx.createVideoContext('video' + this.data.videoIndex)
      videoContextPrev.stop()
      this.setData({
        videoIndex: event.currentTarget.dataset.i
      })
      var videoContextCurrent = wx.createVideoContext('video' + event.currentTarget.dataset.i)
      // videoContext.requestFullScreen({ direction: 90 })
      videoContextCurrent.play()
    }
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