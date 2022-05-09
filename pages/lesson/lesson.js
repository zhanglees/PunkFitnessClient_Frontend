// pages/lesson/lesson.js
Page({

    /**
     * Page initial data
     */
    data: {
        sectionName: '',
        showOrder: 0,
        actionList: [],
        itemsShow: [{
            name: '器械',
            id: 'equipmentName'
        }, {
            name: '配重',
            id: 'counterWeight',
            unit: 'kg'
        }, {
            name: '单组次数',
            id: 'numberSinglegroup',
            unit: '次'
        }, {
            name: '组数',
            id: 'groups',
            unit: '组'
        }, {
            name: '训练部位',
            id: 'trainingAreaName'
        }],
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function(options) {
        this.getLesson()
    },
    getLesson() {
        this.setData({
            sectionName: '体能提升课程',
            showOrder: 5,
            actionList: [{
                action: 2,
                actionName: "阿诺德推胸（肩伸90℃）",
                coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
                counterWeight: 23,
                equipment: 0,
                equipmentName: "哑铃",
                groups: 3,
                numberSinglegroup: 2,
                sectionDetailId: "0acacd8a-027e-486a-b6bb-81acfd70b7c5",
                sectionName: "sfdafds",
                trainingArea: 0,
                trainingAreaName: "胸大肌",
                trainingType: 0,
                userId: "14c6962a-fb31-4ad5-ae72-6fcb74054a53",
                usertrainSectionId: "ec404a18-5148-4376-bfc3-a7146f0585ec",
                videourl: "https://www.zhangleixd.com/static/14c6962a-fb31-4ad5-ae72-6fcb74054a53/face/d17429da-b9e3-4121-a2ec-16d630e82e72.mp4"
            }, {
                action: 0,
                actionName: "颈前引体向上",
                coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
                counterWeight: 4,
                equipment: 0,
                equipmentName: "哑铃",
                groups: 4,
                numberSinglegroup: null,
                sectionDetailId: "e82f3d65-d761-4e93-a4d8-f5c43810f24f",
                sectionName: "sfdafds",
                trainingArea: 2,
                trainingAreaName: "背阔肌",
                trainingType: 0,
                userId: "14c6962a-fb31-4ad5-ae72-6fcb74054a53",
                usertrainSectionId: "ec404a18-5148-4376-bfc3-a7146f0585ec",
                videourl: "https://www.zhangleixd.com/static/14c6962a-fb31-4ad5-ae72-6fcb74054a53/face/82bfb94c-c44b-463d-990d-af5bf53d786e.mp4"
            }]
        })
    },
    showShare() {
        
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