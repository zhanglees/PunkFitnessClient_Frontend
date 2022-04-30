// pages/stage/stage.js
Page({

    /**
     * Page initial data
     */
    data: {
        list: [],
        id: ''
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
        const {id} = options;
        this.setData({
            id
        })
        this.getList();
        wx.setNavigationBarTitle({
          title: id == 1 ? '适应期': '进步期'
        })
    },
    getList(){
        this.setData({
            list: [{
                time: '2022/02/14 17:40',
                name: '3.增肌训练',
                avatar: '',
                coach: '王教练'
            },{
                time: '2022/02/14 17:40',
                name: '3.增肌训练',
                avatar: '',
                coach: '张教练'
            }]
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