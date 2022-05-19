// pages/mine/mine.js
var app = getApp();
Page({

    /**
     * Page initial data
     */
    data: {
        userInfo: {},
        // userInfoExt: {},
        // hasUserInfo: false,
        // canIUse: wx.canIUse('button.open-type.getUserInfo'),
        // canIUseGetUserProfile: false,
        // canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
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
        console.log('e', e.currentTarget.dataset.index);
        wx.navigateTo({
            url: `/pages/training/stagelist/stagelist?type=record&i=${e.currentTarget.dataset.index}`
        })
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
        console.log('用户：', wx.getStorageSync('userInfo'))
        this.data.userId = wx.getStorageSync('userInfo').id;
        // this.setData({
        //     userInfo: wx.getStorageSync('userInfo'),
        //     info: {
        //         count: 50,
        //         sign: 10,
        //         last: 40,
        //         time: 500
        //     }
        // })
        this.getMemberInfo();
    },
    getMemberInfo() {
        app.req.api.getUserById({ id: this.data.userId }).then(res => {
            console.log('返回：', res.data);
            const {trainClassNumbers, singInNum} = res.data;
            this.setData({
                info: {
                    count: trainClassNumbers,
                    sign: singInNum,
                    last: trainClassNumbers - singInNum,
                    time: singInNum
                }
            });
            // console.log(886668, this.data.userInfoGet);
        })
    },
    gotoSetting() {
        wx.navigateTo({
            url: '/pages/setting/setting',
        })
    },
    gotoLogin(){
        app.globalData.backUrl = '/pages/mine/mine';
        wx.navigateTo({
            url: '/pages/login/login',
        })
    },
    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function () {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow: function () {

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide: function () {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload: function () {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh: function () {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function () {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function () {

    }
})