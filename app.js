// app.js
const req = require('/utils/req.js');
App({
    onLaunch() {
        this.overShare()
    },
    /**
     * 开启朋友圈分享功能
     * @description 监听路由切换/自动执行
     * @return void
     */
    overShare() {
        wx.onAppRoute((res) => {
            // console.log('route', res)
            let pages = getCurrentPages()
            let view = pages[pages.length - 1]
            if (view) {
                wx.showShareMenu({
                    menus: ['shareAppMessage', 'shareTimeline'],
                    success(res) {},
                    fail(e) {}
                })
            }
        })
    },
    req: req,
    globalData: {
        appid: '',
        appsecret: '',
        backUrl: '/pages/index/index'
    }
})

/*"pages": [
  "pages/index/index",   //首页
  "pages/mine/mine",   //我的
  "pages/schedule/schedule",   //预约
  "pages/setting/setting",   我的-个人信息设置
  "pages/lesson/lesson",   首页（训练记录）-阶段列表-课时列表-课时详情
  "pages/questionnaire/overview/overview",     首页-问卷列表
  "pages/questionnaire/healthy/healthy",  首页-问卷详情
  "pages/evaluation/dynamic/dynamic",    首页-评估列表-动态评估详情
  "pages/evaluation/static/static",   首页-评估列表-静态评估详情
  "pages/evaluation/overview/overview",     首页-评估列表
  "pages/evaluation/physical/physical",    首页-评估列表-体适能评估详情
  "pages/inbody/overview/overview",       首页-体测列表
  "pages/inbody/report/report",   首页-体测列表-体测详情
  "pages/training/stagelist/stagelist",    首页（训练规划、训练记录）-阶段列表
  "pages/training/stagedetail/stagedetail",     首页（训练规划）-阶段列表-规划详情
  "pages/classPhaseDetail/probationPeriod/probationPeriod",
  "pages/classPhaseDetail/progressivePeriod/progressivePeriod",
  "pages/classPhaseDetail/consolidationPeriod/consolidationPeriod"    首页（训练记录）-阶段列表-课时列表  我的（课时）-课时列表
],*/