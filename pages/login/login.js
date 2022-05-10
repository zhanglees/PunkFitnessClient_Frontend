// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getPhoneNumber'),
    hasPhone: false,//是否授权了手机号
    hasUser: false,//是否授权了用户信息
    backUrl: '/pages/index/index' //登录后跳转页面
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.backUrl = app.globalData.backUrl;
    wx.login({
        success: (res) => {
        this.setData({
            wxCode: res.code
        });
        }
    });
  },
//获取用户信息
getUserInfo() {
  var _this = this;
  wx.getUserProfile({
      desc: '用于完善客户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
          // if (!res.encryptedData || !res.iv) return false;

          // console.log(res,'微信用户信息')
        // wx.setStorageSync('userInfo', res.userInfo);
        // app.globalData.userInfo = res.userInfo;
          // this.setData({
          //     hasUser: true
          // })
          // if(this.data.hasPhone){ 
          //   wx.reLaunch({
          //       url: '/pages/index/index',
          //   })
          // }
      }
  })
},

  // getUserInfo(e) {
  //   console.log(99999999998, e.detail.errMsg)

  //   var that = this;
  //   if (e.detail.errMsg == "getUserInfo:ok") {
  //     wx.setStorageSync('userInfo', e.detail.userInfo)
  //     console.log(999888,e.detail.userInfo)
  //     // this.setData({ userInfo: e.detail.userInfo });
  //     // that.showDialogBtn();//调用一键获取手机号弹窗（自己写的）
  //   }
  //   // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  //   // wx.getUserProfile({
  //   //   desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //   //   success: (res) => {
  //   //     app.globalData.userInfo = res.userInfo;
  //   //     this.setData({
  //   //       userInfo: res.userInfo,
  //   //       hasUserInfo: true
  //   //     })
  //   //   },
  //   //   fail: ()=>{
  //   //     console.log(9998866668,res)
  //   //     wx.showToast({
  //   //       title: '未授权无法使用小程序功能',
  //   //     })
  //   //   }
  //   // })
  // },
  getPhoneNumber: function (e) {
    console.log(99999999998, 'getPhoneNumber')
    const _this = this;
    const { encryptedData, iv } = e.detail;
    if (!encryptedData || !iv) { // 如果参数不存在就退出函数
      return false;
    }
    wx.checkSession({
      success: () => { // session_key 未过期，并且在本生命周期一直有效，那么可以直接请求登录方法，把值传给后台
        if (this.data.wxCode) {  // 判断 临时登录凭证 code 是否存在
            // _this.setData({
            //     hasPhone: true
            // })
          this.showGetInfo();
        //   this.wxLogin(this.data.wxCode, encryptedData, iv);
        } else { // 若不存在，需要重新执行登录流程
          goNext();
        }
      },
      fail: () => { // session_key 已经失效，需要重新执行登录流程
        goNext();
      }
    });
    const goNext = () => { // wx.login
      wx.login({
        success: (res) => {
          const {
            code
          } = res;
          if (!code) {
            return false;
          }
          this.wxLogin(code, encryptedData, iv)
        }
      })
    };

    // let that = this;
    // if (e.detail.errMsg == 'getPhoneNumber:ok') {
    //   //请求后端登录接口 带着用户授权信息  没有就新建 
    //   WXrequest.post({
    //     url: '/getWXUserPhone',
    //     data: {
    //       'encryptedData': e.detail.encryptedData,
    //       'openid': that.data.openid,
    //       'iv': e.detail.iv,
    //     }
    //   }).then(res => { 
    //    // 存用户手机号及用户信息
    //     wx.setStorageSync('purePhoneNumber', res.data.purePhoneNumber);
    //     wx.setStorageSync('userInfo', res.data);
    //     // 跳转首页
    //     wx.showLoading({
    //       title: '登录中'
    //     })
    //     setTimeout(function () {
    //       wx.switchTab({
    //         url: '../mine/index'
    //       })
    //     }, 1000)
    //   })
    // }
  },
  wxLogin(code, encryptedData, iv) {
    wx.showLoading({ // 显示登录 loading
      title: '努力登录中...',
    })
    // 发起网络请求
    wx.request({
      method: "POST", // 请求方法
      url: "https://example.com/wxLogin", // 请求url
      data: { // 请求参数
        code, // 临时登录凭证 code
        encryptedData, // 用户信息加密数据
        iv // 加密算法的初始向量
      },
      success: function (res) { // 接口调用成功的回调函数
        wx.hideLoading(); // 隐藏 loading 提示框
        if (res && res.data && res.data.userInfo && res.data.userInfo.token) {
          // 将 用户信息 和 token 存储在本地缓存中
          wx.setStorageSync('userInfo', res.data.userInfo);
          // 判断是否存在上级页面，如果有，登录成功后则返回上一级页面并刷新，如果返回层级大于现有页面数，则返回到首页
          let pages = getCurrentPages(); // 在内存中的所有页面栈对象
          let prePage = pages[pages.length - 2]; // 我的页面对象
          if (prePage) {
            wx.navigateBack({ // 关闭当前页面，返回上一页面
              success: () => {
                // 执行前一页面的onLoad方法，刷新页面
                prePage.onLoad();
              }
            });
          } else {
            wx.navigateBack(); // 关闭当前页面，返回上一页面
          }
          return false;
        }
        // 如果没有token和用户信息，则登录失败
        wx.showModal({
          title: "提示", // 提示的标题
          content: "登录失败，请重新登录", // 提示的内容
          showCancel: false // 是否显示取消按钮
        });
      },
      fail: function (e) { // 接口调用失败的回调函数
        wx.hideLoading(); // 隐藏 loading 提示框
        wx.showModal({
          title: "提示", // 提示的标题
          content: (e && e.msg) || "登录失败，请重新登录", // 提示的内容
          showCancel: false // 是否显示取消按钮
        });
      }
    });
  },
  //弹框授权用户信息
  showGetInfo: function(){
    const _this = this;
    wx.showModal({
      title: "提示",
      content:
        "您是首次使用小程序，我们希望获得您的个人信息，以便为您提供更好的服务",
      showCancel: false, // 是否显示取消按钮
      success(res) {
        // 用户点击了确定
        if (res.confirm) {
          wx.getUserProfile({
            desc: "用于完善用户资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: res => {
              // 用户同意授权
            },
            fail: e => {
              // 用户拒绝授权
            },
            complete: e => {
              // 接口调用结束（调用成功、失败都会执行）
              console.log(888888,e)
              wx.setStorageSync('userInfo', e.userInfo || {});
              app.globalData.userInfo = e.userInfo || {};
              wx.reLaunch({
                url: _this.data.backUrl,
              })
            }
          });
        }
      }
    });
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