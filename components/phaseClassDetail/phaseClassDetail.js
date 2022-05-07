// components/phaseClassDetail/phaseClassDetail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    type: 0,
    infoList: [{
      title: '全部课时',
      id: 'count',
    }, {
      title: '已上课时',
      id: 'sign',
    }, {
      title: '未上课时',
      id: 'last',
    }],

    // 课程数据
    courseData: [
      {
        id: 3,
        courseName: '3.增肌训练',
        courseTime: '2022/02/14 17:40',
        img: '',
        coach: '王教练'
      },
      {
        id: 2,
        courseName: '2.体能训练',
        courseTime: '2022/02/14 17:40',
        img: '',
        coach: '王教练'
      },
      {
        id: 1,
        courseName: '1.燃脂训练',
        courseTime: '2022/02/14 17:40',
        img: '',
        coach: '王教练'
      }


    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 转换小导航
    transformAct(e) {
      // console.log('获取e',e.target.dataset.type);
      // 根据课时获取数据并修改li
      this.setData({
        type: e.target.dataset.type
      })
    },
    // 跳转课时详情并携带id
    gotoClassDeatil(e) {
      console.log('跳转课时详情并携带id', e);
      wx.navigateTo({
        url: '',
      })
    }

  }
})
