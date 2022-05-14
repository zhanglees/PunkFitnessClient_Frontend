// questionnaire overview.js
const app = getApp();
Page({
  data: {
    typeList: ['健身问卷', '健康问卷'],
    type: 0,
    userId: '',
    questionList: [],
  },
  onLoad(options) {
    // console.log(888, options.userId)
    // this.setData({
        // questionnaire: this.data.questionLib[this.data.type],
        // userId: options.userId
    // });
    this.data.userId = wx.getStorageSync('userInfo').id;
    this.getList();
  },
  getList(){
    console.log('userId:', this.data.userId)
    app.req.api.getUserQuestionListByType({
        userId: this.data.userId,
    }).then(res => {
        this.setData({
            [`questionList[${0}]`]: res.data
        });
    });

    // this.setData({
    //     [`questionList[${0}]`]: [{
    //         coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
    //         coachName: "张教练",
    //         questionType: 1,
    //         recordTime: "今天42分钟前"},{
    //             coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
    //             coachName: "张教练",
    //             questionType: 1,
    //             recordTime: "2022/05/07"
    //         }],
    //     [`questionList[${1}]`]: [{
    //         coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
    //         coachName: "张三三",
    //         questionType: 0,
    //         recordTime: "2022/05/07"},{
    //             coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
    //             coachName: "张三三",
    //             questionType: 0,
    //             recordTime: "2022/05/07"},{
    //                 coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
    //                 coachName: "张三三",
    //                 questionType: 0,
    //                 recordTime: "2022/05/07"}]
    // });
  },
    //查看详情
    gotoDetail(e){
        const {index, questiontype} = e.currentTarget.dataset;
        const data = this.data.questionList[questiontype][index];
        console.log('overview: ', index, data)
        wx.navigateTo({
            url: '../healthy/healthy?coachId=' + data.coachId + '&questionType=' + questiontype + '&recordTime=' + data.recordTime
        })
    },
    tabChange(e){
       const type = e.currentTarget.dataset.type;
        this.setData({
            type: type
        })
    }
})