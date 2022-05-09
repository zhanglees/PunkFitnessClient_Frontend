const wxml = (data)=>{
  return `
<view class="container" >
  <view class="header">
    <text class="title">${data.sectionName}</text>
    <image class="avatar" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3582589792,4046843010&fm=26&gp=0.jpg"></image>
  </view>
  <view class="summary">
    <view class="schedule">
      <text class="summarytitle">课程进度</text>
      <view class="summarydata">
        <text class="summarydatanum">12/50</text><text class="summarydataunit">节</text>
      </view>
    </view>
    <view class="divided"></view>
      <view class="done">
        <text class="summarytitle">
        累计训练
        </text>
      <view class="summarydata">
        <text class="summarydatanum">1250</text><text class="summarydataunit">min</text>
      </view>
    </view>
  </view>
</view>
`};
const style = {
  container: {
    width: 280,
    paddingTop: 43,
    paddingLeft: 24,
    paddingRight: 24,
    // flexDirection: 'column',
    // justifyContent: 'space-around',
    // backgroundColor: '#fff',
    // alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 232,
    height: 24,
    marginBottom: 21,
  },
  title: {
    width: 200,
    height: 24,
    fontSize:16,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },
  summary: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  schedule: {
    height: 64,
    width: 100,
  },
  summarydata:{
    width: 115,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  summarytitle:{
    width: 115,
    height: 24,
    fontSize:12,
    color: '#707784',
  },
  summarydatanum:{
    width: 80,
    height: 32,
    fontSize:18,
    color: '#222834',
  },
  summarydataunit:{
    width: 25,
    height: 24,
    fontSize:12,
    color: '#707784',
  },
  divided: {
    backgroundColor: '#F1F1F3',
    width: 1,
    height: 64,
    marginRight: 32,
  },
  itemBox: {
    width: 80,
    height: 60,
  },
  red: {
    backgroundColor: '#ff0000'
  },
  green: {
    backgroundColor: '#00ff00'
  },
  blue: {
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: 80,
    height: 60,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
  }
}

module.exports = {
  wxml,
  style
}
