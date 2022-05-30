// components/chooseCoach/chooseCoach.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    topHeight: {
      type: Number,
      value: 0
    },
    // coachList:{
    //   type:Array,
    //   value:[]
    // },
    typeId: {
      type: Number,
      value: 0,
      observer(newVal, oldVal) {
        // 第一种方式通过参数传递的方式触发函数的执行
        this.getCoachList();
      }
    },
    userId:{
      type: String,
      value: '',
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    selectName: '全部',
    height: 0,
    selectAll: [{ id: 1, name: '全部教练' }, { id: 2, name: '张三' }, { id: 3, name: '李四' }, { id: 4, name: '二麻' }, { id: 5, name: '可可' }],
    userId: '052fdb81-8d72-40fd-ab1b-b8496d16aaab',
    typeId: '',
    coachList: []
  },


  /**
   * 组件的方法列表
   */
  methods: {
    // 获取教练列表
    getCoachList() {
      // const { userId } = this.data
      const { typeId ,userId} = this.properties
      app.req.api.getTrainerAssessmentByRecordList({
        userId,
        assessmentType: typeId || 0
      }).then((res) => {
        console.log('全部教练', res);
        this.setData({
          coachList: res.data
        })
      })
    },
    // 点击全部
    selectCoach() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    selcetSingle(e) {
      console.log('选择按下', e.target.dataset.test);
      this.triggerEvent('selcetCoach', { coachName: e.target.dataset.test.coachId });
      this.setData({
        isShow: false,
        selectName: e.target.dataset.test.coachName == '全部教练' ? '全部' : e.target.dataset.test.coachName
      })

    },
    cancelBtn() {
      this.setData({
        isShow: false
      })
    },
    changeIsShow(){
      this.setData({
        isShow: false
      })
    }

  },

  attached(){
    // console.log("组件初始化");
    this.getCoachList()
    // this.data.userId = wx.getStorageSync('userInfo').id;
},
})

