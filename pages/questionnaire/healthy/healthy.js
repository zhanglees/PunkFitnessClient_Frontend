// questionnaire overview.js
const app = getApp()
Page({
    data: {
        typeList: ['健身问卷', '健康问卷'],
        questionList: [],
        coachId: '',
        userId: '',
    },
    onLoad(options) {
        const { questionType, recordTime, coachId } = options;
        this.data.userId = wx.getStorageSync('userInfo').id;
        this.data.recordTime = recordTime;
        this.data.coachId = coachId;
        this.data.questionType = questionType;
        wx.setNavigationBarTitle({
            title: ['健身', '健康'][questionType] + '问卷详情',
        })
        this.getQuestionDetail();
    },

    /***查看问卷详情时拿着数据请求问卷详情****/
    getQuestionDetail() {
        const { userId, coachId, recordTime, questionType } = this.data;
        app.req.api.getQuestionDetail({
            userId,
            coachId,
            recordTime,
            questionType
        }).then(res => {
            this.setData({
                questionList: res.data ? res.data.questions : []
            })
        });
    },
})