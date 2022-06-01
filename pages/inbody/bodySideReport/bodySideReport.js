// pages/inbody/bodySideReport/bodySideReport.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        reportId: "6712f718-5a17-473c-be06-351785dfd26f",
        detailList: [{
                name: '身高',
                icon: '/images/icons/shengao.png',
                danwei: 'cm',
                id: 'height'
            },
            {
                name: '体重',
                icon: '/images/icons/tizhong.png',
                danwei: 'kg',
                id: 'weight'
            },
            {
                name: 'BMI',
                icon: '/images/icons/bmi.png',
                danwei: '',
                id: 'bmi'
            },
            {
                name: '体脂率',
                icon: '/images/icons/tizhilv.png',
                danwei: '%',
                id: 'bodyFatRatio'
            },
            {
                name: '脂肪量',
                icon: '/images/icons/zhifangliang.png',
                danwei: '%',
                id: 'fatContent'
            },
            {
                name: '水分',
                icon: '/images/icons/shuifen.png',
                danwei: '%',
                id: 'waterContent'
            },
            {
                name: '骨骼肌',
                icon: '/images/icons/gugeji.png',
                danwei: '%',
                id: 'skeletalMuscle'
            },
            {
                name: '肌肉量',
                icon: '/images/icons/jirouliang.png',
                danwei: '%',
                id: 'muscleMass'
            },
            {
                name: '腰臀比',
                icon: '/images/icons/yaotunbi.png',
                danwei: '',
                id: 'waistHipRatio'
            },

        ],
        bodyMeasurementList: [{
                name: '身高',
                icon: '/images/icons/shengao.png',
                danwei: 'cm',
                id: 'height'
            },
            {
                name: '体重',
                icon: '/images/icons/tizhong.png',
                danwei: 'kg',
                id: 'weight'
            },
            {
                name: 'BMI',
                icon: '/images/icons/bmi.png',
                danwei: '',
                id: 'bmi'
            },
            {
                name: '胸围',
                icon: '/images/icons/bmi.png',
                danwei: 'cm',
                id: 'chestMeasurement'
            },
            {
                name: '腰围',
                icon: '/images/icons/bmi.png',
                danwei: 'cm',
                id: 'waistline'
            },
            {
                name: '臂围',
                icon: '/images/icons/bmi.png',
                danwei: 'cm',
                id: 'hipline'
            },
            {
                name: '左上臂围',
                icon: '/images/icons/bmi.png',
                danwei: 'cm',
                id: 'leftArmCircumference'
            },
            {
                name: '右上臂围',
                icon: '/images/icons/bmi.png',
                danwei: 'cm',
                id: 'rightArmCircumference'
            },
            {
                name: '左大腿围',
                icon: '/images/icons/bmi.png',
                danwei: 'cm',
                id: 'leftThighCircumference'
            },
            {
                name: '右大腿围',
                icon: '/images/icons/bmi.png',
                danwei: 'cm',
                id: 'rightThighCircumference'
            },
            {
                name: '左小腿围',
                icon: '/images/icons/bmi.png',
                danwei: 'cm',
                id: 'leftShankCircumference'
            },
            {
                name: '右小腿围',
                icon: '/images/icons/bmi.png',
                danwei: 'cm',
                id: 'rightShankCircumference'
            }
        ],
        userhealthcheckReportList: {},
        userhealthcheckResourceList: {}
    },

    getBodySideReportList() {
        const { reportId } = this.data
            // console.log('reportId', reportId);
        app.req.api.getHealthReportDetail({ reportId }).then(res => {
            console.log('体侧详情：', res.data)
            const { userhealthcheckReport, userhealthcheckResource } = res.data
            let formResourceUrl = {};
            for (var i in userhealthcheckResource) {
                userhealthcheckResource[i] && (formResourceUrl[i] = 'https://' + userhealthcheckResource[i]);
            }
            this.setData({
                userhealthcheckReportList: userhealthcheckReport,
                userhealthcheckResourceList: formResourceUrl
            })
        })

    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.data.reportId = options.reportId;
        this.getBodySideReportList()
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})