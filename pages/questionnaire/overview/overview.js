// questionnaire overview.js
const app = getApp()
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
    this.getList();
  },
  getList(){
    let coachId = wx.getStorageSync('mp-req-user-id');
    // app.req.api.getUserQuestionList({
    //     coachId: coachId,
    //     userId: this.data.userId,
    //     type: 0
    // }).then(res => {
    //     console.log(888888, res)
    //     this.setData({
    //         [`questionList[${0}]`]: res.data
    //     });
    // });
    // app.req.api.getUserQuestionList({
    //     coachId: coachId,
    //     userId: this.data.userId,
    //     type: 1
    // }).then(res => {
    //     this.setData({
    //         [`questionList[${1}]`]: res.data
    //     });
    // });

    this.setData({
        [`questionList[${0}]`]: [{
            coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
            coachName: "张教练",
            questionType: 1,
            recordTime: "今天42分钟前"},{
                coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
                coachName: "张教练",
                questionType: 1,
                recordTime: "2022/05/07"
            }],
        [`questionList[${1}]`]: [{
            coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
            coachName: "张三三",
            questionType: 0,
            recordTime: "2022/05/07"},{
                coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
                coachName: "张三三",
                questionType: 0,
                recordTime: "2022/05/07"},{
                    coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
                    coachName: "张三三",
                    questionType: 0,
                    recordTime: "2022/05/07"}]
    });
  },
    //查看详情
    gotoDetail(e){
        const {recordtime, questiontype} = e.currentTarget.dataset;
        console.log('overview: ', recordtime, questiontype,e.currentTarget.dataset)
        wx.navigateTo({
            url: '../healthy/healthy?userId=' + this.data.userId + '&questionType=' + questiontype
        })
    },
    tabChange(e){
       const type = e.currentTarget.dataset.type;
        this.setData({
            type: type
        })
    },
    onShow(){
        this.getList();
    }
})