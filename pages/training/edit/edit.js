// pages/training/edit/edit.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: null,
        editData: [{
                id: 0,
                className: '徒手胸肌撕裂者训练入门',
                classTime: '2021/11/08',
                img: "/images/avatar.png",
                name: '李四'
            },
            {
                id: 1,
                className: '大体重减脂丨无跳跃，不上膝盖，燃脂吧啦吧',
                classTime: '2021/11/08',
                img: "/images/avatar.png",
                name: '李四'
            },
            {
                id: 2,
                className: '羽毛球进阶少儿班',
                classTime: '2021/11/08',
                img: "/images/avatar.png",
                name: '李四'
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.userId = wx.getStorageSync('userInfo').id;
        this.getData();
    },
    getData() {
        app.req.api.getUserExperienceLessonDetail({ userId: this.userId }).then(res => {
            this.setData({
                list: res.data || []
            })
        })
    },
    gotoDetail(e) {
        const index = e.currentTarget.dataset.index;
        const { coachId, usertrainSectionId, sectionName, completeTime } = this.data.list[index];
        wx.navigateTo({
            url: '/pages/lesson/lesson' + ('?coachId=' + coachId + '&usertrainSectionId=' + usertrainSectionId + '&sectionName=' + sectionName + '&completeTime=' + completeTime),
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})