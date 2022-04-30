// pages/lesson/lesson.js
Page({

    /**
     * Page initial data
     */
    data: {
        tabList: [{
            name: '总课时',
            id: 0
        }, {
            name: '已上课时',
            id: 1
        }, {
            name: '未上课时',
            id: 2
        }],
        current: 0,
        lessonList: []
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
        this.getLessons()
    },
    getLessons(){
        this.setData({
            lessonList: this.data.current == 0 ? [{
                id: 1,
                time: '2022/02/14',
                name: '适应期',
                avatar: '',
                coach: '王教练',
                count: 15,
                total: 18,
                status: 1
            }, {
                id: 2,
                time: '2022/02/14',
                name: '进步期',
                avatar: '',
                coach: '王教练',
                count: '',
                total: 18,
                status: 0
            }] : this.data.current == 1 ? [{
                time: '2022/02/14 17:40',
                name: '3.增肌训练',
                avatar: '',
                coach: '王教练'
            },{
                time: '2022/02/14 17:40',
                name: '3.增肌训练',
                avatar: '',
                coach: '张教练'
            }] : [{
            time: '2022/02/14 17:40',
            name: '3.增肌训练',
            avatar: '',
            coach: '张教练'
        },{
            time: '2022/02/14 17:40',
            name: '2.体能训练',
            avatar: '',
            coach: '张教练'
        },{
            time: '2022/02/14 17:40',
            name: '2.体能训练',
            avatar: '',
            coach: '张教练'
        }]})
    },
    changeTab(e){
        const i = e.currentTarget.dataset.index;
        this.setData({
            current: i
        })
        this.getLessons()
    },
    gotoDetail(e){
        const id = e.currentTarget.dataset.index;
        wx.navigateTo({
          url: `/pages/stage/stage?id=${id}`,
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