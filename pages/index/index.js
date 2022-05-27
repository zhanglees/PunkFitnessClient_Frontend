// memberinfo.js
var util = require('../../utils/util.js');
// 获取应用实例
const app = getApp()

Page({
    data: {
        userInfo: null,
        serverList: [{
            name: '训练规划',
            link: '/pages/training/stagelist/stagelist?type=plan&'
        }, {
            name: '训练记录',
            link: '/pages/training/stagelist/stagelist?type=record&'
        }, {
            name: '体验课教案',
            link: '/pages/training/edit/edit?'
        }, {
            name: '评估测试',
            link: '/pages/evaluation/overview/overview?'
        }, {
            name: '体测报告',
            link: '/pages/inbody/overview/overview?'
        }, {
            name: '健康问卷',
            link: '/pages/questionnaire/overview/overview?'
        }],
        logs: null,
        logsLen: 0
    },

    onLoad(options) {},
    onShow() {
        const userInfo = wx.getStorageSync('userInfo');
        if (userInfo && userInfo.phone) {
            this.data.userInfo = userInfo;
            this.getLogs(this.data.userInfo.id);
        } else {
            this.setData({
                logs: [],
                logsLen: 0,
                userInfo: null
            })
        }
    },

    getLogs(userId) {
        app.req.api.getUserLogById({
            userId
        }).then(res => {
            let data = res.data || [];
            let temp = {};
            data.forEach(i => {
                const time = i.createTime ? i.createTime.match(/([0-9]+)-([0-9]+-[0-9]+)\s([0-9]+:[0-9]+)/) : [];
                if (time.length > 3) {
                    const year = time[1],
                        date = time[2].replace('-', '/'),
                        t = time[3];
                    if (temp[year]) {
                        let d = temp[year];
                        if (d[date]) {
                            d[date].push({
                                date,
                                time: t,
                                content: i.controllerPath,
                                coach: i.coachName
                            })
                        } else {
                            d[date] = [{
                                date,
                                time: t,
                                content: i.controllerPath,
                                coach: i.coachName
                            }];
                        }
                    } else {
                        temp[year] = {
                            [`${date}`]: [{
                                date,
                                time: t,
                                content: i.controllerPath,
                                coach: i.coachName
                            }]
                        }
                    }
                }
                this.setData({
                    logs: temp,
                    logsLen: data.length
                })
            })
        })
    },
    // getLogs: function(){
    //   const logs =  {
    //       '#2021': {
    //           '11.02': [{
    //           date: '11.02',
    //           time: '12:10',
    //           content: '训练计划',
    //           coach:'王祥'
    //           }, {
    //           date: '11.02',
    //           time: '12:10',
    //           content: '训练计划',
    //           coach:'王祥王祥'
    //           }, {
    //           date: '11.02',
    //           time: '12:10',
    //           content: '训练计划',
    //           coach:'王祥'
    //           }, {
    //           date: '11.02',
    //           time: '12:10',
    //           content: '训练计划',
    //           coach:'王祥'
    //           }], 
    //           '10.03': [{
    //           time: '12:10',
    //           content: '训练计划',
    //           coach:'王祥'
    //           }, {
    //           time: '12:10',
    //           content: '训练计划',
    //           coach:'王祥'
    //           }, {
    //           time: '12:10',
    //           content: '训练计划',
    //           coach:'王祥'
    //           }, {
    //           time: '12:10',
    //           content: '训练计划',
    //           coach:'王祥'
    //           }]
    //       },
    //       '#2020': {
    //           '11.02': [{
    //           date: '11.02',
    //           time: '12:10',
    //           content: '训练计划',
    //           coach:'王祥'
    //           }, {
    //           date: '11.02',
    //           time: '12:10',
    //           content: '训练计划',
    //           coach:'王祥'
    //           }, {
    //           date: '11.02',
    //           time: '12:10',
    //           content: '训练计划',
    //           coach:'王祥'
    //           }, {
    //           date: '11.02',
    //           time: '12:10',
    //           content: '训练计划',
    //           coach:'王祥'
    //           }],
    //           '02.11': [{
    //           date: '11.02',
    //           time: '12:10',
    //           content: '训练计划',
    //           coach:'王祥'
    //           }]
    //       }
    //   };
    //   this.setData({
    //     logs: logs,
    //     logsLen: Object.keys(logs).length
    //   });
    // },
    //跳转到其他页面
    gotoServer: function(e) {
        let link = e.currentTarget.dataset.link;
        if (this.data.userInfo) {
            wx.navigateTo({
                url: link
            })
        } else {
            //未登录跳转登录
            wx.redirectTo({
                    url: '/pages/login/login?back=' + link,
                })
                // app.globalData.backUrl = link;
        }
    }
})