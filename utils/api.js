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
            const url = `${req.apiUrl}/healthCheck/getHealthReportDetail?reportId=${data}`;
            return request({ url, method: 'POST', data });
        },
        GetUserClassByUserId(data) {
            const url = `${req.apiUrl}/trainPlanClient/GetUserClassByUserId`;
            return request({ url, method: 'GET', data });
        },
        getUserTrainPlainDetail(data) { //训练计划详情
            const url = `${req.apiUrl}/trainPlan/getUserTrainPlainDetai`;
            return request({ url, method: 'GET', data });
        },

    };
}

module.exports = {
    install,
};