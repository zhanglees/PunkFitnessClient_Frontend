function install(req, request) {
    req.api = {
        getWXPhone(data) {
            const url = `${req.apiUrl}/userCilent/getWXPhone`;
            return request({ url, method: 'GET', data });
        },
        userIdentity(data) {
            const url = `${req.apiUrl}/userCilent/userIdentity`;
            return request({ url, method: 'POST', data });
        },
        getUserQuestionListByType(data) {
            const url = `${req.apiUrl}/questionnaireClient/getUserQuestionListByType`;
            return request({ url, method: 'GET', data });
        },
        getQuestionDetail(data) {
            const url = `${req.apiUrl}/questionnaire/getUserTemplateQuestionDetail`;
            return request({ url, method: 'POST', header: { 'content-type': 'application/x-www-form-urlencoded' }, data });
        },
        getUserHealthCheckAll(data) {
            const url = `${req.apiUrl}/healthCheckClient/getUserHealthCheckAll`;
            return request({ url, method: 'GET', data });
        },

        getHealthReportDetail(data) {
            const url = `${req.apiUrl}/healthCheck/getHealthReportDetail`;
            return request({ url, method: 'POST', data, header: { 'content-type': 'application/x-www-form-urlencoded' } });
        },
        GetUserClassByUserId(data) {
            const url = `${req.apiUrl}/trainPlanClient/GetUserClassByUserId`;
            return request({ url, method: 'GET', data });
        },
        getUserTrainPlainDetail(data) { //训练计划详情
            const url = `${req.apiUrl}/trainPlan/getUserTrainPlainDetai`;
            return request({ url, method: 'GET', data });
        },

        getUserClassSectionDetail(data) { //查看课程详情
            const url = `${req.apiUrl}/trainPlan/getUserClassSectionDetail`;
            return request({ url, method: 'POST', data });
        },
        /***训练记录**/
        getUserClassSection(data) { //课时列表
            const url = `${req.apiUrl}/trainPlan/getUserClassSection`;
            return request({ url, method: 'POST', data });
        },
        // 评估测试列表
        // getTrainersAssessmentList(data) {
        //     const url = `${req.apiUrl}/assessment/getTrainersAssessment?assessmentType=${data}`;
        //     return request({ url, method: 'POST', data });
        // },
        getTrainersAssessmentList(data) {
            const url = `${req.apiUrl}/assessmentClient/getTrainerAssessmentByRecord`;
            return request({ url, method: 'POST', data });
        },
        // 评估测试详情
        // getTrainerAssessmentDetail(data) {
        //     const url = `${req.apiUrl}/assessment/getTrainerAssessmentDetail`;
        //     return request({ url, method: 'POST', data });
        // },
        getTrainerAssessmentDetail(data) {
            const url = `${req.apiUrl}/assessmentClient/getTrainerAssessmentDetail`;
            return request({ url, method: 'POST', data });
        },
        // 得到全部教练
        getTrainerAssessmentByRecordList(data) {
            const url = `${req.apiUrl}/assessment/getTrainerAssessmentByRecord`;
            return request({ url, method: 'POST', data });
        },

        getUserLogById(data) {
            const url = `${req.apiUrl}/userSystemLog/getUserLogById`;
            return request({ url, method: 'GET', data });
        },
        getAppointmentAllByDate(data) {
            const url = `${req.apiUrl}/coachAppointment/getAppointmentAllByDate`;
            return request({ url, method: 'GET', data });
        },
        getUserById(data) {
            const url = `${req.apiUrl}/user/byid`;
            return request({ url, method: 'GET', data });
        },
        //体验课列表
        getUserExperienceLessonDetail(data) {
            const url = `${req.apiUrl}/experienceLessonClient/getUserExperienceLessonDetail`;
            return request({ url, method: 'GET', data });
        },

        uploadFile(data) {
            console.log('上传参数：', data.formData)
            wx.uploadFile({
                url: `${req.apiUrl}/resource/uploadFile`,
                filePath: data.path,
                name: 'files',
                formData: data.formData,
                header: { 'content-type': 'multipart/form-data' },
                complete(res) {
                    //do something
                    console.log('图片上传完：', res.data)
                    data.success && data.success(JSON.parse(res.data));
                }
            })
        },
        modifyUserInfoById(data) {
            const url = `${req.apiUrl}/user/modifyUserInfoById`;
            return request({ url, method: 'POST', data });
        },
    };
}

module.exports = {
    install,
};