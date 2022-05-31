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
        }],
        isLogin: false
    },


    // 跳转到课时详情
    gotoDeatil(e) {
        if (this.data.userInfo.phone) {
            console.log('e', e.currentTarget.dataset.index);
            wx.navigateTo({
                url: `/pages/training/stagelist/stagelist?type=record&i=${e.currentTarget.dataset.index}`
            })
        } else {
            wx.redirectTo({
                url: '/pages/login/login?back=/pages/mine/mine',
            })
        }
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function(options) {
        wx.loadFontFace({
            family: 'Roboto-Bold',
            source: 'url("https://www.zhangleixd.com/static/imgs/Roboto-Bold-3.ttf")',
            success: console.log
        })
        console.log('用户：', wx.getStorageSync('userInfo'))
    },
    getUserInfo() {
        const id = this.data.id;
        app.req.api.getUserById({
            id
        }).then(res => {
            let data = res.data;
            const { trainClassNumbers, singInNum } = data;
            if (!data.headImg.includes('https://')) {
                data.headImg = 'https://' + data.headImg
            }
            this.setData({
                userInfo: data,
                count: trainClassNumbers,
                sign: singInNum,
                last: trainClassNumbers - singInNum,
                time: singInNum
            })
        })
    },
    gotoSetting() {
        wx.navigateTo({
            url: '/pages/setting/setting',
        })
    },
    gotoLogin() {
        // app.globalData.backUrl = '/pages/mine/mine';
        wx.navigateTo({
            url: '/pages/login/login?back=/pages/mine/mine',
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
        const userInfo = wx.getStorageSync('userInfo');
        console.log('user:', userInfo)
        if (userInfo && userInfo.phone) {
            this.data.id = userInfo.id;
            this.getUserInfo();
        } else {
            this.setData({
                userInfo: {},
                info: {}
            })
        }
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