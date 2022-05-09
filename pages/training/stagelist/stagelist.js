// pages/packageA/training/stagelist/stagelist.js
const app = getApp()
Page({
    /**
     * Page initial data
     */
    data: {
        type: 'plan', //默认是训练计划进来
        list: [],
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function(options) {
        const { userId, type } = options; //用来区分是训练规划还是训练记录,记录则每条跳转到该阶段对应的课程，规划则每条跳转到该阶段的详情
        console.log('type',type);
        // const coachId = wx.getStorageSync('mp-req-user-id');
        wx.setNavigationBarTitle({
            title: '训练' + {plan: '规划', record:'记录'}[type],
        })
        this.setData({
            //     userId,
            //     coachId,
            type: type
        })
        this.getStageList();
    },
    getStageList() {
        // const { userId, coachId } = this.data;
        //取数据
        // app.req.api.getUserClassByCoachId({
        //     userId,
        //     coachId
        // }).then(res=>{
        //     console.log('fanhui list:', res.data);
        //     let stageList = res.data.userTrainItems;
        //     this.setData({
        //         trainingPlanId: res.data.trainingPlanId,
        //         list: stageList
        //     });
        // })

        this.setData({
            list: [{
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
            }] 
        })
    },

    /***查看该阶段课程列表 */
    gotoDetail(e) {
        const { index, trainingPlanId, userTrainitemId, name } = e.currentTarget.dataset;
        console.log('name',e);
        const url = (this.data.type == 'plan' ? '/pages/training/stagedetail/stagedetail?' : '/pages/classPhaseDetail/consolidationPeriod/consolidationPeriod');
        //查详情的接口需要传大量的参数，所以先存起来吧
        wx.setStorage({
            key: "stageDetail",
            data: this.data.list[index]
        });
        wx.navigateTo({
            url
        });
         this.data.type == 'record'?wx.setNavigationBarTitle({ title: name }):wx.setNavigationBarTitle({ title: '训练规划' })
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
        this.getStageList();

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