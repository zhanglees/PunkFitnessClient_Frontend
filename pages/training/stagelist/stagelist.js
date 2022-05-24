// pages/packageA/training/stagelist/stagelist.js
const app = getApp()
Page({
    /**
     * Page initial data
     */
    data: {
        type: 'plan', //默认是训练计划进来
        list: [],
        classIndex: 0
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function(options) {
        const { type, i } = options; //用来区分是训练规划还是训练记录,记录则每条跳转到该阶段对应的课程，规划则每条跳转到该阶段的详情
        //i用来判断我的页面过来的课程状态 
        // console.log('options11111111', i);
        console.log('type', type);
        // const coachId = wx.getStorageSync('mp-req-user-id');
        wx.setNavigationBarTitle({
            title: '训练' + (type == 'plan' ? '规划' : '记录'),
        })
        this.setData({
            //     userId,
            //     coachId,
            type: type,
            classIndex: i
        })
        this.getStageList();
    },
    getStageList() {
        const userId = wx.getStorageSync('userInfo').id;
        //取数据
        app.req.api.GetUserClassByUserId({
            userId
        }).then(res => {
            console.log('fanhui list:', res.data);
            let stageList = res.data.userTrainItems;
            this.setData({
                trainingPlanId: res.data.trainingPlanId,
                list: stageList
            });
        })

        // this.setData({
        //     list: [{
        //         id: 1,
        //         time: '2022/02/14',
        //         name: '适应期',
        //         avatar: '',
        //         coach: '王教练',
        //         count: 15,
        //         total: 18,
        //         status: 1
        //     }, {
        //         id: 2,
        //         time: '2022/02/14',
        //         name: '进步期',
        //         avatar: '',
        //         coach: '王教练',
        //         count: '',
        //         total: 18,
        //         status: 0
        //     }] 
        // })
    },

    /***查看该阶段课程列表 */
    gotoDetail(e) {
        const index = e.currentTarget.dataset.index;
        const { trainingPlanId, coachId, classId, userTrainitemId, className, coachName } = this.data.list[index];
        const url = (this.data.type == 'plan' ? '/pages/training/stagedetail/stagedetail?' : `/pages/classPhaseDetail/consolidationPeriod/consolidationPeriod?userTrainitemId=${userTrainitemId}&className=${className}&coachName=${coachName}`) + '&classId=' + classId + '&trainingPlanId=' + trainingPlanId + '&coachId=' + coachId;

        console.log('url:', url);
        wx.navigateTo({
            url
        });
        // this.data.type == 'record' ? wx.setNavigationBarTitle({ title: name }) : wx.setNavigationBarTitle({ title: '训练规划' })
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