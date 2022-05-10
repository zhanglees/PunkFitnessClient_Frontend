// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getPhoneNumber')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserProfile();
  },
//获取用户信息
  getUserProfile(e) {
    console.log(99999999998)
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(999888,res)
        app.globalData.userInfo = res.userInfo;
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      },
      fail: ()=>{
        console.log(9998866668,res)
        wx.showToast({
          title: '未授权无法使用小程序功能',
        })
      }
    })
  },
  getPhoneNumber: function (e) {
    if(!wx.getStorageSync('userInfo')){
      this.getUserProfile();
    }
    let that = this;
    if (e.detail.errMsg == 'getPhoneNumber:ok') {
      //请求后端登录接口 带着用户授权信息  没有就新建 
      WXrequest.post({
        url: '/getWXUserPhone',
        data: {
          'encryptedData': e.detail.encryptedData,
          'openid': that.data.openid,
          'iv': e.detail.iv,
        }
      }).then(res => { 
       // 存用户手机号及用户信息
        wx.setStorageSync('purePhoneNumber', res.data.purePhoneNumber);
        wx.setStorageSync('userInfo', res.data);
        // 跳转首页
        wx.showLoading({
          title: '登录中'
        })
        setTimeout(function () {
          wx.switchTab({
            url: '../mine/index'
          })
        }, 1000)
      })
    }
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