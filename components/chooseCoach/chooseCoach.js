// components/chooseCoach/chooseCoach.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    topHeight:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    selectName:'全部',
    height:0,
    selectAll: [{ id: 1, name: '全部教练' }, { id: 2, name: '张三' }, { id: 3, name: '李四' }, { id: 4, name: '二麻' }, { id: 5, name: '可可' }]
  },


  /**
   * 组件的方法列表
   */
  methods: {
    // 点击全部
    selectCoach() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    selcetSingle(e) {
      console.log('选择按下', e.target.dataset.test);
      this.setData({
        isShow: false,
        selectName:e.target.dataset.test.name=='全部教练'?'全部':e.target.dataset.test.name
      })
      
    },
    cancelBtn(){
      this.setData({
        isShow: false
      })
    }
  }
})
