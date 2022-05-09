// pages/mine/mine.js
var app = getApp();
Page({

    /**
     * Page initial data
     */
    data: {
        userInfo: {},
        userInfoExt: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
        infoList: [{
            title: '总课时',
            id: 'count'
        }, {
            title: '已上课时',
            id: 'sign'
        }, {
            title: '未上课时',
            id: 'last'
        }]
    },


    // 跳转到课时详情
    gotoDeatil(e) {
        // console.log('e',e);
        wx.navigateTo({
            url: '/pages/training/stagelist/stagelist?type=record'
        })
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function(options) {
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true
            })
        }
        this.getUserInfo();
        this.setData({
                info: {
                    count: 50,
                    sign: 10,
                    last: 40,
                    time: 500
                }
            })
            // app.req.api.getMyInfo()
            //   .then((res) => {
            //     console.log(res);
            //   })
            //   .catch(app.req.err.show);

    },
    getUserInfo() {
        this.setData({
            userInfoExt: {
                phone: '123123123123'
            }
        })
    },
    getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
            desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                console.log('*************', res)
                    // getApp().globalData.userInfo = res.userInfo;
                wx.setStorage({
                    key: "userInfo",
                    data: res.userInfo
                })
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        })
    },
    gotoSetting() {
        wx.navigateTo({
            url: '/pages/setting/setting',
        })
    },
    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function() {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow: function() {

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide: function() {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload: function() {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh: function() {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function() {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function() {

    }
})