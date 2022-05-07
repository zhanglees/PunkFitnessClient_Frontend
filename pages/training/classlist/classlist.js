// pages/packageA/training/classlist/classlist.js
const app = getApp()
Page({
    /**
     * Page initial data
     */
    data: {
        type: 'plan', //默认是训练计划进来
        list: [],
        slideButtons: [{
            type: 'warn',
            text: '删除',
            extClass: 'test',
            src: '' // icon的路径
        }],
        dialogShow: false,
        dialogIndex: '', //当前要删除的index
        dialogButtons: [{ text: '取消' }, { text: '确定' }],
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
        const { userId, type } = options; //用来区分是训练规划还是训练记录,记录则每条跳转到该阶段对应的课程，规划则每条跳转到该阶段的详情
        // const coachId = wx.getStorageSync('mp-req-user-id');
        // this.setData({
        //     userId,
        //     coachId,
        //     type: type
        // })
        this.getStageList();
    },
    getStageList() {
        const { userId, coachId } = this.data;
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
        const d = [{ "userTrainitemId": "4e156480-3f7d-423a-8dd9-206c7344e1e0", "trainingPlanId": "e7519426-d8b9-4d37-8b23-d815a74db72f", "classId": "4ff671ed-b34f-103a-93cd-9854d842c0fa", "userId": "052fdb81-8d72-40fd-ab1b-b8496d16aaab", "classNum": 6, "coachId": "f15371d7-975b-4ae9-98fb-df54453ef0a5", "userTrainplanClassContents": null, "coachRemarks": "33333", "stageFrequency": 2, "stagePeriod": 3, "createTime": "2021-12-23 09:52:12", "completeSections": 0, "coachName": "System1638937755880", "className": "适应期" }, { "userTrainitemId": "122c80a5-3657-4d7e-a2f6-e34d25b7191a", "trainingPlanId": "e7519426-d8b9-4d37-8b23-d815a74db72f", "classId": "5a21d02d-b34f-103a-93cd-9854d842c0fa", "userId": "052fdb81-8d72-40fd-ab1b-b8496d16aaab", "classNum": null, "coachId": "f15371d7-975b-4ae9-98fb-df54453ef0a5", "userTrainplanClassContents": null, "coachRemarks": null, "stageFrequency": null, "stagePeriod": null, "createTime": "2021-12-23 09:52:12", "completeSections": 0, "coachName": "System1638937755880", "className": "进步期" }, { "userTrainitemId": "2b854fdb-f1b0-4ca7-b8df-d7b748bb0bcb", "trainingPlanId": "e7519426-d8b9-4d37-8b23-d815a74db72f", "classId": "604732c9-b34f-103a-93cd-9854d842c0fa", "userId": "052fdb81-8d72-40fd-ab1b-b8496d16aaab", "classNum": null, "coachId": "f15371d7-975b-4ae9-98fb-df54453ef0a5", "userTrainplanClassContents": null, "coachRemarks": null, "stageFrequency": null, "stagePeriod": null, "createTime": "2021-12-23 09:52:12", "completeSections": 0, "coachName": "System1638937755880", "className": "巩固期" }, { "userTrainitemId": "d7b449c1-e41b-443c-81ad-986b662db016", "trainingPlanId": "e7519426-d8b9-4d37-8b23-d815a74db72f", "classId": "26ad091b-5e9c-4964-af3f-205c96f1e571", "userId": "052fdb81-8d72-40fd-ab1b-b8496d16aaab", "classNum": 3, "coachId": "f15371d7-975b-4ae9-98fb-df54453ef0a5", "userTrainplanClassContents": null, "coachRemarks": "备注", "stageFrequency": 1, "stagePeriod": 3, "createTime": "2022-01-07 12:57:03", "completeSections": 0, "coachName": "System1638937755880", "className": "第5阶段" }]
        this.setData({
            list: d
        });
    },

    /***查看该阶段课程列表 */
    gotoDetail(e) {
        const { index, trainingPlanId, userTrainitemId,name } = e.currentTarget.dataset;
        const url = (this.data.type == 'plan' ? '/pages/classPhaseDetail/consolidationPeriod/consolidationPeriod' : '/pages/packageA/training/class/class?trainingPlanId=');
        //查详情的接口需要传大量的参数，所以先存起来吧
        wx.setStorage({
            key: "stageDetail",
            data: this.data.list[index]
        });
        wx.navigateTo({
            url
        });
        wx.setNavigationBarTitle({ title: name })
    },
    slideButtonTap(e) {
        const { index, usertrainitemid } = e.currentTarget.dataset;
        //删除
        this.setData({
            dialogShow: true,
            dialogIndex: index,
            delId: usertrainitemid
        })
    },
    /***删除一条阶段 */
    tapDialogButton(e) {
        if (e.detail.index === 1) {
            //删除
            app.req.api.delUserTrainClassById({
                userTrainitemId: this.data.delId
            }).then(res => {
                if (res.data) {
                    wx.showToast({
                        title: '删除成功',
                        icon: 'success'
                    })
                    let list = this.data.list;
                    const index = this.data.dialogIndex;
                    list.splice(index, 1);
                    this.setData({
                        list: list,
                        dialogIndex: ''
                    })
                } else {
                    wx.showToast({
                        title: '稍后重试',
                        icon: 'error'
                    })
                }
            })
        }
        this.setData({
            dialogShow: false
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
        this.getStageList();

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