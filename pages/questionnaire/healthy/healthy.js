// questionnaire overview.js
const app = getApp()
Page({
    data: {
        typeList: ['健身问卷', '健康问卷'],
        questionList: [],
        coachId: '',
        userId: '',
        answers: []//记录选择选项
    },
    onLoad(options){
        const {questionType} = options;
        wx.setNavigationBarTitle({
          title: ['健身', '健康'][questionType]+'问卷详情',
        })
        // this.setData({
            // coachId: coachId,
            // userId: userId
        // });
        //查看详情，去取详情
        this.setData({
            questionType
        });
        this.getQuestionDetail(questionType);
    },
    
    /***查看问卷详情时拿着数据请求问卷详情****/
    getQuestionDetail(type){
        // const {userId, coachId, recordTime} = this.data;
        // app.req.api.getUserTemplateQuestionDetail({
        //     userId,
        //     coachId,
        //     // recordTime,
        //     questionType: type
        // }).then(res=>{
        //     // let answers = [];
        //     // answers = res.data.map(i=>{
        //     //     return i.questionItemId
        //     // })
        //     console.log('问卷详情：', res)
        //     this.setData({
        //         questionList: res.data ? res.data.questions : []
        //     })
        // });
        this.setData({
            questionList: [{"questionId":"fb943bb5-ad0e-103a-a787-e7e4c0162da0","questionTemplateId":"EDC0C14B-D8C9-4DB7-AFA7-0004B5BAC077","required":0,"remark":"","questionAnswer":"","questionContent":"您之前有没有过健身经历？","questionType":1,"ownerId":"system","items":[],"showOrder":"1","itemExplain":null},{"questionId":"aea32302-ad13-103a-a787-e7e4c0162da0","questionTemplateId":"EDC0C14B-D8C9-4DB7-AFA7-0004B5BAC077","required":0,"remark":null,"questionAnswer":null,"questionContent":"您现在有没有任何的健身计划？","questionType":1,"ownerId":"system","items":[{"questionItemId":"b44e05a9-ad18-103a-a787-e7e4c0162da0","qustionId":"aea32302-ad13-103a-a787-e7e4c0162da0","describes":"有","isAnswer":2,"ownerId":"system"}],"showOrder":"2","itemExplain":"sfdsafdafdsafdsafds"},{"questionId":"b9e91775-ad13-103a-a787-e7e4c0162da0","questionTemplateId":"EDC0C14B-D8C9-4DB7-AFA7-0004B5BAC077","required":0,"remark":null,"questionAnswer":null,"questionContent":"您希望通过健身达到哪些改变？","questionType":2,"ownerId":"system","items":[{"questionItemId":"bf9b64b9-ad18-103a-a787-e7e4c0162da0","qustionId":"b9e91775-ad13-103a-a787-e7e4c0162da0","describes":"增肌","isAnswer":2,"ownerId":"system"},{"questionItemId":"c65177e0-ad18-103a-a787-e7e4c0162da0","qustionId":"b9e91775-ad13-103a-a787-e7e4c0162da0","describes":"塑形","isAnswer":2,"ownerId":"system"},{"questionItemId":"cb96cb28-ad18-103a-a787-e7e4c0162da0","qustionId":"b9e91775-ad13-103a-a787-e7e4c0162da0","describes":"康复","isAnswer":2,"ownerId":"system"},{"questionItemId":"d17eafb6-ad18-103a-a787-e7e4c0162da0","qustionId":"b9e91775-ad13-103a-a787-e7e4c0162da0","describes":"提高运动表现","isAnswer":2,"ownerId":"system"},{"questionItemId":"d790847d-ad18-103a-a787-e7e4c0162da0","qustionId":"b9e91775-ad13-103a-a787-e7e4c0162da0","describes":"改善亚健康","isAnswer":2,"ownerId":"system"}],"showOrder":"3","itemExplain":null},{"questionId":"c360dca3-ad13-103a-a787-e7e4c0162da0","questionTemplateId":"EDC0C14B-D8C9-4DB7-AFA7-0004B5BAC077","required":0,"remark":null,"questionAnswer":null,"questionContent":"您最想改变哪个部位？","questionType":2,"ownerId":"system","items":[{"questionItemId":"e9174602-ad18-103a-a787-e7e4c0162da0","qustionId":"c360dca3-ad13-103a-a787-e7e4c0162da0","describes":"背部","isAnswer":2,"ownerId":"system"},{"questionItemId":"f0b4463b-ad18-103a-a787-e7e4c0162da0","qustionId":"c360dca3-ad13-103a-a787-e7e4c0162da0","describes":"肩部","isAnswer":2,"ownerId":"system"},{"questionItemId":"15e95d20-ad19-103a-a787-e7e4c0162da0","qustionId":"c360dca3-ad13-103a-a787-e7e4c0162da0","describes":"腹部","isAnswer":2,"ownerId":"system"},{"questionItemId":"215b44fc-ad19-103a-a787-e7e4c0162da0","qustionId":"c360dca3-ad13-103a-a787-e7e4c0162da0","describes":"腿部","isAnswer":2,"ownerId":"system"},{"questionItemId":"262917ec-ad19-103a-a787-e7e4c0162da0","qustionId":"c360dca3-ad13-103a-a787-e7e4c0162da0","describes":"臀部","isAnswer":2,"ownerId":"system"}],"showOrder":"4","itemExplain":null},{"questionId":"ca7f0ab9-ad13-103a-a787-e7e4c0162da0","questionTemplateId":"EDC0C14B-D8C9-4DB7-AFA7-0004B5BAC077","required":0,"remark":null,"questionAnswer":null,"questionContent":"您希望多长时间完成目标？","questionType":1,"ownerId":"system","items":[{"questionItemId":"2b3356ac-ad19-103a-a787-e7e4c0162da0","qustionId":"ca7f0ab9-ad13-103a-a787-e7e4c0162da0","describes":"1个月","isAnswer":2,"ownerId":"system"}],"showOrder":"5","itemExplain":null},{"questionId":"d0eb8132-ad13-103a-a787-e7e4c0162da0","questionTemplateId":"EDC0C14B-D8C9-4DB7-AFA7-0004B5BAC077","required":0,"remark":null,"questionAnswer":null,"questionContent":"您是否聘请过私人教练？","questionType":1,"ownerId":"system","items":[{"questionItemId":"7c03ea49-ad1a-103a-a787-e7e4c0162da0","qustionId":"d0eb8132-ad13-103a-a787-e7e4c0162da0","describes":"有","isAnswer":2,"ownerId":"system"}],"showOrder":"6","itemExplain":null},{"questionId":"d8371ecb-ad13-103a-a787-e7e4c0162da0","questionTemplateId":"EDC0C14B-D8C9-4DB7-AFA7-0004B5BAC077","required":0,"remark":null,"questionAnswer":null,"questionContent":"为了您的目标您每周能来运动几次？","questionType":1,"ownerId":"system","items":[{"questionItemId":"b88f6a9a-ad1a-103a-a787-e7e4c0162da0","qustionId":"d8371ecb-ad13-103a-a787-e7e4c0162da0","describes":"2-3天","isAnswer":2,"ownerId":"system"}],"showOrder":"7","itemExplain":null},{"questionId":"de7dfd30-ad13-103a-a787-e7e4c0162da0","questionTemplateId":"EDC0C14B-D8C9-4DB7-AFA7-0004B5BAC077","required":0,"remark":"","questionAnswer":null,"questionContent":"您通常每天什么时间来运动？（可多选）","questionType":2,"ownerId":"system","items":[{"questionItemId":"f7037b69-ad1a-103a-a787-e7e4c0162da0","qustionId":"de7dfd30-ad13-103a-a787-e7e4c0162da0","describes":"上午","isAnswer":2,"ownerId":"system"},{"questionItemId":"fc16e7eb-ad1a-103a-a787-e7e4c0162da0","qustionId":"de7dfd30-ad13-103a-a787-e7e4c0162da0","describes":"中午","isAnswer":2,"ownerId":"system"},{"questionItemId":"01ae4fdf-ad1b-103a-a787-e7e4c0162da0","qustionId":"de7dfd30-ad13-103a-a787-e7e4c0162da0","describes":"下午","isAnswer":2,"ownerId":"system"}]}]
        });
    },
})