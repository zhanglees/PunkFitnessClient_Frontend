// pages/lesson/lesson.js
const { wxml, style } = require('./shareImg.js')
const app = getApp()
Page({

    /**
     * Page initial data
     */
    data: {
        sectionName: '',
        showOrder: 0,
        showShare: false,
        actionList: [],
        itemsShow: [{
            name: '器械',
            id: 'equipmentName'
        }, {
            name: '配重',
            id: 'counterWeight',
            unit: 'kg'
        }, {
            name: '单组次数',
            id: 'numberSinglegroup',
            unit: '次'
        }, {
            name: '组数',
            id: 'groups',
            unit: '组'
        }, {
            name: '训练部位',
            id: 'trainingAreaName'
        }],
        shareImg: '',    //分享图片本地临时地址
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function(options) {
        this.getLesson()
        this.widget = this.selectComponent('.widget')
        this.data.userInfo = wx.getStorageSync('userInfo');
    },
    getLesson() {
        const data = {
            sectionName: '体能提升课程',
            showOrder: 5,
            actionList: [{
                action: 2,
                actionName: "阿诺德推胸（肩伸90℃）",
                coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
                counterWeight: 23,
                equipment: 0,
                equipmentName: "哑铃",
                groups: 3,
                numberSinglegroup: 2,
                sectionDetailId: "0acacd8a-027e-486a-b6bb-81acfd70b7c5",
                sectionName: "sfdafds",
                trainingArea: 0,
                trainingAreaName: "胸大肌",
                trainingType: 0,
                userId: "14c6962a-fb31-4ad5-ae72-6fcb74054a53",
                usertrainSectionId: "ec404a18-5148-4376-bfc3-a7146f0585ec",
                videourl: "https://www.zhangleixd.com/static/14c6962a-fb31-4ad5-ae72-6fcb74054a53/face/d17429da-b9e3-4121-a2ec-16d630e82e72.mp4"
            }, {
                action: 0,
                actionName: "颈前引体向上",
                coachId: "f15371d7-975b-4ae9-98fb-df54453ef0a5",
                counterWeight: 4,
                equipment: 0,
                equipmentName: "哑铃",
                groups: 4,
                numberSinglegroup: null,
                sectionDetailId: "e82f3d65-d761-4e93-a4d8-f5c43810f24f",
                sectionName: "sfdafds",
                trainingArea: 2,
                trainingAreaName: "背阔肌",
                trainingType: 0,
                userId: "14c6962a-fb31-4ad5-ae72-6fcb74054a53",
                usertrainSectionId: "ec404a18-5148-4376-bfc3-a7146f0585ec",
                videourl: "https://www.zhangleixd.com/static/14c6962a-fb31-4ad5-ae72-6fcb74054a53/face/82bfb94c-c44b-463d-990d-af5bf53d786e.mp4"
            }]
        };
        this.setData({...data});
    },
    renderToCanvas() {
        wx.showToast({
          title: '图片生成中',
          mask: true,
          icon: 'loading',
          duration: 100000
        });
        const userInfo = this.data.userInfo;
        const {sectionName, actionList} = this.data;
        console.log(8888, userInfo)
        const _wxml = wxml({sectionName, actionList, userInfo});
        const p1 = this.widget.renderToCanvas({ wxml: _wxml, style })
        p1.then((res) => {
            this.container = res
            this.extraImage()
            wx.hideToast();
        })
    },
    extraImage() {
        const p2 = this.widget.canvasToTempFilePath()
        p2.then(res => {
          this.setData({
            showShare: true,
            shareImg: res.tempFilePath,
            width: this.container.layoutBox.width,
            height: this.container.layoutBox.height
          })
        })
    },
    closeShare(e){
        console.log(88888888, e.target)
        this.setData({
          showShare: false,
        })
    },
    // showShare(url) {
    //     this.setData({ 
    //         shareImg: url,  
    //         dialogShow: true
    //     })
    // },
    // closeDialog(){
    //     this.setData({
    //         dialogShow: false
    //     })
    // },
    /****开始画图 */
    // createNewImg(){
    //     if(this.data.shareImg){
    //         this.showShare(this.data.shareImg);
    //     }else{
    //         const that = this;
    //         wx.showToast({
    //           title: '图片生成中',
    //           mask: true,
    //           icon: 'loading',
    //           duration: 100000
    //         });
    //         wx.createSelectorQuery().select('#shareFrends')
    //         .fields({ 
    //           node: true
    //         }).exec(function (res) {
    //           const canvas = res[0].node
    //           const ctx = canvas.getContext('2d')

    //           const dpr = wx.getSystemInfoSync().pixelRatio
    //           var rpx=1;
    //           //获取屏幕宽度，获取自适应单位
    //           wx.getSystemInfo({
    //             success: function(res) {
    //               rpx = res.windowWidth/375;
    //             },
    //           })
    //           ctx.save();

    //           const width = 560
    //           const height = 1000
    //         //   context.restore();
    //         //   canvas.width = width * rpx
    //         //   canvas.height = height * rpx
    //         //   context.scale(dpr, dpr)
    //           console.log(width, height, rpx, canvas.width, canvas.height)
    //         //   context.clearRect(0, 0, width , height);
    //         //   context.fillStyle = 'red'
    //         //   context.fillRect(0, 200*rpx, 200, 400)
    //         //   context.save();

        
    //           const padding = 24;
    //           var title = "体能提升课程";
    //           ctx.fillStyle = '#222834';
    //           ctx.font = 'normal bold 20px PingFangSC-Semibold';
    //           ctx.fillText("体能提升课程", padding, padding+9);
    //           ctx.restore();
    //         //   context.fillText(tishi, padding, padding+20);
    //           //画头像
    
            
    //           const avatarPromise = new Promise((resolve, reject) => {
    //             const avatar = canvas.createImage()
    //             avatar.onload = () => {
    //               resolve(avatar)
    //             }
    //             avatar.onerror = () => {
    //               reject(new Error(`fail to fetch image avatar`))
    //             }
    //             avatar.src = '../../images/avatar.png';
    //           })
    //           avatarPromise.then(img => {
    //             ctx.drawImage(img, width-54, 40, 30, 30)
    //           })

              
    //         ctx.stroke();
    //         ctx.save();  
    
    //         setTimeout(() => {
    //           that.toSave(canvas);
    //         }, 1000);
    //         })

    //     }
        
    // },
    toSave(canvas) {
        console.log(canvas)
        let that = this
        wx.canvasToTempFilePath({
          x : 0,
          y: 0,
          canvasId: 'share',
          canvas: canvas,
          width: that.data.widths,
          height: that.data.heights ,
          destWidth: that.data.widths * wx.getSystemInfoSync().pixelRatio,
          destHeight: that.data.heights * wx.getSystemInfoSync().pixelRatio,
          success: function (res) {
            let canvasToTempFilePath = res.tempFilePath // 返回的图片地址保存到一个全局变量里
            // console.log(res)
            wx.hideToast();
            that.showShare(canvasToTempFilePath)
          },
            fail: function (error) {
              console.log(error)
            }
        })
      },
    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function() {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow: function() {

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide: function() {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload: function() {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh: function() {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function() {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function() {

    }
})