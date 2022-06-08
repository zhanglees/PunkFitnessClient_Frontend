// pages/packageA/inbody/inbody.js
var wxCharts = require('../../../utils/wxcharts.js');
var util = require('../../../utils/util.js');
var lineChart = null;
const app = getApp();
Page({

    /**
     * Page initial data
     */
    data: {
        textcolor1: '#014f8e',
        textcolor2: '#bfbfbf',
        dataTitle: '',
        reportList: [],
        currentPoint: {},
        xData: [],
        yData: []
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function(options) {
        this.getReportList();
    },
    getReportList() {
        //获取用户的报告记录
        const userid = wx.getStorageSync('userInfo').id;
        app.req.api.getUserHealthCheckAll({
            userId: userid
        }).then(res => {
            const data = res.data;
            const len = data.length;
            if (len) {
                let x_data = [],
                    y_data = [];
                let startDate, endDate;
                data.forEach((i, k) => {
                    const date = util.formatDateStr(i.createTime);
                    if (i.weight) {
                        x_data.push(date);
                        y_data.push(i.weight);
                    }
                });
                this.setData({
                    reportList: data,
                }, () => {
                    if (y_data.length) {
                        startDate = x_data[0];
                        endDate = x_data[x_data.length - 1];
                        this.setData({
                            dataTitle: startDate ? (startDate + ' - ' + endDate) : '',
                            xData: x_data,
                            yData: y_data,
                            currentPoint: { weight: y_data[y_data.length - 1], time: endDate }
                        })
                        this.OnWxChart(x_data, y_data);
                    }
                })
            }
        })

        //获取用户体重数据
        // var x_data=["12-05", "12-06", "12-07", "12-08", "12-09", "12-10", "12-11"]
        // var y_data= ["55", "56", "53", "55", "55", "57", "53"]
        //     //绘制折线图
        // this.OnWxChart(x_data,y_data);
        // this.setData({
        //   dataTitle: "2022/02/27" + ' ~ ' + "2022/08/09",
        //   reportList: [{
        //     userHealthcheckId:'123',
        //     userName: 'user',
        //     createTime: '2021/01/20',
        //     weight: 50,
        //     bodyFatRatio: 8,
        //     waistHipRatio: 0.8
        //   }, {
        //     userHealthcheckId:'123',
        //     userName: 'user',
        //     createTime: '2021/01/20',
        //     weight: 50,
        //     bodyFatRatio: 8,
        //     waistHipRatio: 0.8
        //   }, {
        //     userHealthcheckId:'123',
        //     userName: 'user',
        //     createTime: '2021/01/20',
        //     weight: 50,
        //     bodyFatRatio: 8,
        //     waistHipRatio: 0.8
        //   }, {
        //     userHealthcheckId:'123',
        //     userName: 'user',
        //     createTime: '2021/01/20',
        //     weight: 50,
        //     bodyFatRatio: 8,
        //     waistHipRatio: 0.8
        //   }, {
        //     userHealthcheckId:'123',
        //     userName: 'user',
        //     createTime: '2021/01/20',
        //     weight: 50,
        //     bodyFatRatio: 8,
        //     waistHipRatio: 0.8
        //   }, {
        //     userHealthcheckId:'123',
        //     userName: 'user',
        //     createTime: '2021/01/20',
        //     weight: 50,
        //     bodyFatRatio: 8,
        //     waistHipRatio: 0.8
        //   }, {
        //     userHealthcheckId:'123',
        //     userName: 'user',
        //     createTime: '2021/01/20',
        //     weight: 50,
        //     bodyFatRatio: 8,
        //     waistHipRatio: 0.8
        //   }, {
        //     userHealthcheckId:'123',
        //     userName: 'user',
        //     createTime: '2021/01/20',
        //     weight: 50,
        //     bodyFatRatio: 8,
        //     waistHipRatio: 0.8
        //   }]
        // })
    },
    touchHandlerr: function(e) {
        let index = lineChart.getCurrentDataIndex(e);
        if (index == -1) {
            return
        } else {
            this.setData({
                currentPoint: { weight: this.data.yData[index], time: this.data.xData[index] }
            })
        }
        // lineChart.showToolTip(e, {
        //     // background: '#7cb5ec',
        //     format: function(item, category) {
        //         return category + ' ' + item.name + ':' + item.data
        //     }
        // });
    },

    updateData: function(x_data, y_data) {
        var series = [{
            name: "体重",
            data: y_data,
            format: function(val, name) {
                return val + '';
            }
        }];
        lineChart.updateData({
            categories: x_data,
            series: series
        });
    },
    OnWxChart: function(x_data, y_data) {
        var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }
        lineChart = new wxCharts({
            canvasId: 'lineCanvas', //输入wxml中canvas的id
            type: 'line',
            categories: x_data, //模拟的x轴横坐标参数
            background: '#3D4257',
            animation: true, //是否开启动画
            legend: false,
            dataLabel: false,
            dataPointShape: true,
            series: [{
                name: "体重",
                data: y_data,
                color: '#5586EB',
                format: function(val, name) {
                    return val + '';
                }
            }],
            xAxis: { //是否隐藏x轴分割线
                disableGrid: true,
                fontColor: '#9093a0',
                gridColor: '#9093a0',
            },
            yAxis: { //y轴数据
                disableGrid: true,
                titleFontColor: '#9093a0',
                fontColor: '#9093a0',
                gridColor: '#3D4257',
                format: function(val) {
                    return val + 'kg';
                }
            },
            width: windowWidth,
            height: 189,
            extra: {
                lineStyle: 'curve'
            }
        });
    },
    /***添加体测报告*/
    addReport() {
        wx.redirectTo({
            url: '/pages/packageA/inbody/report/report?userId=' + this.data.userId,
        })
    },
    reportDetail(e) {
        const id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '/pages/inbody/bodySideReport/bodySideReport?reportId=' + id,
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