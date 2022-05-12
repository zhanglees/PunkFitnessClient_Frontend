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
    logs: null
  },

  onLoad(options) {
    const userInfo = wx.getStorageSync("userInfo");
    if(userInfo){
        this.data.userInfo = userInfo;
    }
  },
  onShow(){
    if(this.data.userInfo){
        console.log(888, this.data.userInfo)
      this.getLogs();
    }
  },
  getLogs: function(){
    this.setData({
      logs: {
        '#2021': {
          '11.02': [{
            date: '11.02',
            time: '12:10',
            content: '训练计划',
            coach:'王祥'
          }, {
            date: '11.02',
            time: '12:10',
            content: '训练计划',
            coach:'王祥王祥'
          }, {
            date: '11.02',
            time: '12:10',
            content: '训练计划',
            coach:'王祥'
          }, {
            date: '11.02',
            time: '12:10',
            content: '训练计划',
            coach:'王祥'
          }], 
          '10.03': [{
            time: '12:10',
            content: '训练计划',
            coach:'王祥'
          }, {
            time: '12:10',
            content: '训练计划',
            coach:'王祥'
          }, {
            time: '12:10',
            content: '训练计划',
            coach:'王祥'
          }, {
            time: '12:10',
            content: '训练计划',
            coach:'王祥'
          }]
        },
        '#2020': {
          '11.02': [{
            date: '11.02',
            time: '12:10',
            content: '训练计划',
            coach:'王祥'
          }, {
            date: '11.02',
            time: '12:10',
            content: '训练计划',
            coach:'王祥'
          }, {
            date: '11.02',
            time: '12:10',
            content: '训练计划',
            coach:'王祥'
          }, {
            date: '11.02',
            time: '12:10',
            content: '训练计划',
            coach:'王祥'
          }],
          '02.11': [{
            date: '11.02',
            time: '12:10',
            content: '训练计划',
            coach:'王祥'
          }]
        }
      }
    });
  },
   //跳转到其他页面
  gotoServer: function (e) {
    let link = e.currentTarget.dataset.link;
    if(this.data.userInfo){
        wx.navigateTo({
          url: link
        })
    }else{
        //未登录跳转登录
        wx.redirectTo({
            url: '/pages/login/login',
        })
        app.globalData.backUrl = link;
    }
  }
})
