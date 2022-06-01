// pages/packageA/training/stagedetail/stagedetail.js
const app = getApp()
Page({
    /**
     * Page initial data
     */
    data: {
        userTrainingPlan: {},
        stageList: [],
        infoList: [{
            name: '健身频率',
            unit: '次/周',
            id: 'frequencies'
        }, {
            name: '健身总周期',
            unit: '月',
            id: 'totalPeriod'
        }, {
            name: '健身总次数',
            unit: '次',
            id: 'frequencies'
        }],
        toggleShow: false,
        toggleFlag: true,
        stageItems: ['训练重点', '训练项目', '训练目标'],
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function(options) {
        const userId = wx.getStorageSync('userInfo').id;
        const { trainingPlanId, coachId, classId } = options;
        this.getStageDetail(userId, trainingPlanId, coachId, classId);
    },

    getStageDetail(userId, trainPlainId, coachId, classId) {
        app.req.api.getUserTrainPlainDetail({ userId, trainPlainId, coachId }).then(res => {
            let classInfos = res.data.classInfos;
            classInfos = classInfos.filter((i) => { return i.classId == classId; })
            classInfos.forEach((stage, i) => {
                classInfos[i] = this.dataFormate(stage);
                console.log('详情返回stage:', stage)
            })
            let userTrainingPlan = res.data.userTrainingPlan;
            if (userTrainingPlan && userTrainingPlan.goalsMethod) { userTrainingPlan.goalsMethod = userTrainingPlan.goalsMethod.split(','); }

            console.log('详情返回:', userTrainingPlan)
            this.setData({
                stageList: classInfos,
                userTrainingPlan
            }, () => {
                Promise.all([
                    this._getFields('#stageRemarkWrapper'),
                    this._getFields('#stageRemark')
                ]).then(res => {
                    let parentWidth = res[0];
                    let childWidth = res[1];
                    if ((parentWidth - childWidth) < 0) {
                        this.setData({
                            toggleFlag: true,
                            toggleShow: true
                        })
                    } else {
                        this.setData({
                            toggleShow: false
                        })
                    }
                })
            })
        })
    },
    expandRemark() {
        const { toggleFlag } = this.data;
        this.setData({
            toggleFlag: !toggleFlag
        })
    },
    // getStageDetail(){
    //     // app.req.api.getUserTrainPlainDetail({userId, trainPlainId, coachId}).then(res=>{
    //     const classInfos = [{
    //             classContents: [{
    //                 id: 0,
    //                 name: "训练重点",
    //                 options: [{
    //                     classContentId: "5c8ad4a8-b355-103a-93cd-9854d842c0fa",
    //                     itemName: "心肺功能",
    //                     itemValue: "",
    //                     owner: "system",
    //                     trainClassId: "4ff671ed-b34f-103a-93cd-9854d842c0fa",
    //                     trainTarg: 0,
    //                     userChose: true
    //                 }]},{
    //                 id: 1,
    //                 name: "训练项目",
    //                 options:[{
    //                     classContentId: "728bee98-b355-103a-93cd-9854d842c0fa",
    //                     itemName: "基础体能",
    //                     itemValue: "",
    //                     owner: "system",
    //                     trainClassId: "4ff671ed-b34f-103a-93cd-9854d842c0fa",
    //                     trainTarg: 1,
    //                     userChose: true
    //                 },{
    //                     classContentId: "857a8f3f-b355-103a-93cd-9854d842c0fa",
    //                     itemName: "被动拉伸",
    //                     itemValue: "",
    //                     owner: "system",
    //                     trainClassId: "4ff671ed-b34f-103a-93cd-9854d842c0fa",
    //                     trainTarg: 1,
    //                     userChose: true
    //                 },{
    //                     classContentId: "fe782025-cee6-4d7e-8b90-6f87f9566d34",
    //                     itemName: "自定义的",
    //                     itemValue: "",
    //                     owner: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
    //                     trainClassId: "4ff671ed-b34f-103a-93cd-9854d842c0fa",
    //                     trainTarg: 1,
    //                     userChose: true
    //                 }]
    //             },{
    //                 id: 2,
    //                 name: "训练目标",
    //                 options: [{classContentId: "6b906e5b-4a9b-4846-9bb6-451732dc8fa9",
    //                 itemName: "体重变化",
    //                 itemValue: "增加 3 kg",
    //                 itemValueFlag: "up",
    //                 owner: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
    //                 trainClassId: "77e037f6-4304-42d7-a7ed-5737770fd69f",
    //                 trainTarg: 2,
    //                 userChose: true},{classContentId: "f5b78527-9ef9-49da-82d1-512e923bff9a",
    //                 itemName: "体脂变化",
    //                 itemValue: "减少 -3 %",
    //                 itemValueFlag: "down",
    //                 owner: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
    //                 trainClassId: "77e037f6-4304-42d7-a7ed-5737770fd69f",
    //                 trainTarg: 2,
    //                 userChose: true},{classContentId: "8743efbe-3dd5-4180-8873-4e80f97317ba",
    //                 itemName: "肌肉变化",
    //                 itemValue: "增加 2 kg",
    //                 itemValueFlag: "up",
    //                 owner: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
    //                 trainClassId: "77e037f6-4304-42d7-a7ed-5737770fd69f",
    //                 trainTarg: 2,
    //                 userChose: true}]}],
    //             classHour: null,
    //             classId: "4ff671ed-b34f-103a-93cd-9854d842c0fa",
    //             className: "适应期间",
    //             classNum: 12,
    //             coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
    //             coachName: '张教练',
    //             coachRemarks: "我是好长好长的备注，我有多长呢，我得长到能换行，换行会怎么样呢",
    //             completeSections: null,
    //             createTime: "2021-12-21 10:21:47",
    //             isShow: 1,
    //             ownerId: "system",
    //             stageFrequency: 3,
    //             stagePeriod: 4,
    //             trainingPlanId: "a130c056-61fe-4952-b349-c442c8f61793",
    //             trainingType: null,
    //             userId: "6f1d12fb-3be1-4146-893a-c341159d4ac4"
    //         }];
    //         let userTrainingPlan = {
    //             coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
    //             createTime: "2021-12-27 14:37:02",
    //             frequencies: 4,
    //             goalsMethod: "增肌,塑形,增强体质",
    //             isShow: null,
    //             totalPeriod: 3,
    //             trainingPlanId: "a130c056-61fe-4952-b349-c442c8f61793",
    //             userId: "6f1d12fb-3be1-4146-893a-c341159d4ac4",
    //             userTrainItems: null
    //         };
    //         if(userTrainingPlan && userTrainingPlan.goalsMethod){userTrainingPlan.goalsMethod = userTrainingPlan.goalsMethod.split(',');}

    //         this.setData({
    //             stageList: classInfos,
    //             userTrainingPlan
    //         })
    //     // })
    // },
    _getFields(id) {
        return new Promise((resolve, reject) => {
            wx.createSelectorQuery().select(id).boundingClientRect().exec(function(res) {
                if (res && res.length) {
                    let w = res[0].width;
                    resolve(w)
                } else {
                    reject()
                }
            })
        })
    },
    dataFormate(stage) {
        let classContents = stage.classContents;
        let detail = [];
        classContents.forEach(item => {
            if (item.userChose) {
                const trainTarg = item.trainTarg;
                if (trainTarg == 2) {
                    //训练目标手动修改一下值
                    if (item.itemName.includes('体脂')) {
                        item.itemValue = '减少 ' + (0 - (item.itemValue || 0)) + ' %';
                        item.itemValueFlag = 'down';
                    } else {
                        item.itemValueFlag = (item.itemValue < 0) ? 'down' : 'up';
                        item.itemValue = ((item.itemValue < 0) ? ('减少 ' + (0 - item.itemValue)) : ('增加 ' + (item.itemValue || 0))) + ' kg';
                    }
                }
                if (detail[trainTarg]) {
                    detail[item.trainTarg].options.push({
                        ...item
                    })
                } else {
                    detail[trainTarg] = {
                        id: trainTarg,
                        name: this.data.stageItems[trainTarg],
                        options: [{
                            ...item
                        }]
                    }
                }
            }
        })
        stage.classContents = detail;
        if (stage.userTrainItem) {
            stage = {...stage.userTrainItem, ...stage }
        }
        return stage;
    },
    //getTrainClassItemContent
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