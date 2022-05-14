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
            const url = `${req.apiUrl}/questionnaireClient/getQuestionDetail`;
            return request({ url, method: 'POST', data });
        },
    };
}

module.exports = {
    install,
};