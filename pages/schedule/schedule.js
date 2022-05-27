// pages/schedule/schedule.js
var utils = require('../../utils/util.js')
const app = getApp()
Page({

    /**
     * Page initial data
     */
    data: {
        list: [],
        classList: [],
        selDate: String(new Date()),
        dialogShow: false,
        dialogButtons: [{ text: '取消' }, { text: '确定' }],
        checkClass: [0], //选中的课
        checkAppointment: {},
        showTypeDialog: false
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function(options) {},
    getList() {
        console.log('日期： ', this.data.selDate.replace(/\.|\-/g, '/'))
        app.req.api.getAppointmentAllByDate({
            date: this.data.selDate.replace(/\.|\-/g, '/'),
            userId: this.data.userId
        }).then(res => {
            // const  list = [
            //     {
            //       "appointmentId": "0f8705a0-b61e-4521-837d-e73d98e59b7b", 
            //       "userId": "e930ae3a-e64e-47bd-bfe3-07ac06afcb43",        
            //       "appointmentTime": "2021-12-30 01:58:03",                
            //       "classId": null,
            //       "createTime": "2021-12-29 10:01:16",                     
            //       "isComplete": null,
            //       "classHour": null,
            //       "coachId": "string",                                      
            //       "userName": "System1638917352612",
            //       "avatar": "../../images/avatar.png"                   
            //     },
            //     {
            //       "appointmentId": "17c6e995-b1ef-4251-bc2f-f7507709e068",
            //       "userId": "e930ae3a-e64e-47bd-bfe3-07ac06afcb43",
            //       "appointmentTime": "2021-12-30 02:58:03",
            //       "classId": null,
            //       "createTime": "2021-12-29 10:02:08",
            //       "isComplete": 1,
            //       "classHour": null,
            //       "coachId": "string"  
            //     }
            //   ];
            const list = res.data;
            this.setData({
                list: list
            })
        })
    },

    //日历点击事件
    mydata(e) {
        let date = e.detail.data;
        this.data.selDate = date,
            console.log(date);
        //去拿着日期请求当天的预约列表
        this.getList();
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
        if (userInfo && userInfo.phone) {
            this.data.userId = userInfo.id;
            this.getList();
        } else {
            this.setData({
                list: []
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