const wxml = (data)=>{
  let str = `
<view class="container" >
  <view class="header">
    <text class="title">${data.sectionName}</text>
    <image class="avatar" src="${data.userInfo ? (data.userInfo.headImg || '') : ''}"></image>
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
  </view>`;
  data.actionList.forEach((item, index)=>{
   str += 
  `
  <view class="actionlist">
    <view class="actionitemgray"></view> 
    <view class="actionitem">
    ${item.thumbnailImage ? '<image class="sec-image" src="'+item.thumbnailImage+'"></image>' : ''}
      <view class="actionitemright">
        <text class="actionitemrightname">${item.actionName || '--'}</text>
        <text class="actionindex">动作${index+1}</text>
      </view>
    </view>
  </view>
  <view class="acitem">
    <view class="acitemleft">
        <image class="acticon" src="https://www.zhangleixd.com/static/imgs/share-0.png"></image>
        <text class="actionname">训练部位</text>
    </view>
    <text class="actvalue">${item.trainingAreaName || '--'}</text>
  </view>
  <view class="acitem">
    <view class="acitemleft">
      <image class="acticon" src="https://www.zhangleixd.com/static/imgs/share-1.png"></image>
      <text class="actionname">器械</text>
    </view>
    <text class="actvalue">${item.equipmentName || '--'}</text>
  </view>
  <view class="acitem">
    <view class="acitemleft">
      <image class="acticon" src="https://www.zhangleixd.com/static/imgs/share-2.png"></image>
      <text class="actionname">配重</text>
    </view>
    <text class="actvalue">${item.counterWeight || '--'}kg</text>
  </view>
  <view class="acitem">
    <view class="acitemleft">
      <image class="acticon" src="https://www.zhangleixd.com/static/imgs/share-3.png"></image>
      <text class="actionname">组数</text>
    </view>
    <text class="actvalue">${item.groups || '--'}组</text>
  </view>
  <view class="acitem">
    <view class="acitemleft">
      <image class="acticon" src="https://www.zhangleixd.com/static/imgs/share-4.png"></image>
      <text class="actionname">单组次数</text>
    </view>
    <text class="actvalue">${item.numberSinglegroup || '--'}次</text>
  </view>
`;
})
str += '</view>';
return str;
 };
 //  <image class="sec-image" src="${item.thumbnailImage}"></image>
 //${item.thumbnailImage ? '<image class="sec-image" src="'+item.thumbnailImage+'"></image>' : ''}
const style = {
  container: {
    width: 375,
    paddingTop: 43,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: '#fff',
    borderRadius: 10,
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
    width: 327,
    height: 24,
    marginBottom: 21,
  },
  title: {
    width: 290,
    height: 24,
    fontSize: 20,
    color: '#222834',
    fontWeight: 600,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
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
    width: 150,
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
  summarydatanumbig:{
    width: 80,
    height: 32,
    textAlign: 'right',
    color: '#386DF3',
    fontSize: 32
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
  },
  secImage: {
    width: 155,
    height: 98,
    borderRadius: 6,
  },
  actionindex:{
    width: 48,
    height: 22,
    display: 'block',
    backgroundColor: '#e4e9f6',
    color: '#386DF3',
    textAlign: 'center',
    fontSize: 12,
    borderRadius: 2,
    verticalAlign: 'middle',
  },
  acitem:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#F7F7F9',
    borderRadius: 6,
    width: 327,
    color: '#222834',
    fontSize: 14,
    marginBottom: 16,
  },
  acitemleft: {
    display: 'flex',
    flexDirection: 'row',
    color: '#707784',
    alignItems: 'center',
    marginLeft: 16,
  },

  actionlist:{
    width: 327,
    height: 116,
    marginBottom: 8,
    marginTop: 24,
  },
  actionitemgray:{
    backgroundColor: '#EFEFF1',
    borderRadius: 6,
    height: 50,
    width: 311,
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 8,
  },
  actionitem: {
    borderRadius: 6,
    width: 327,
    height: 98,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F9',
    marginTop: 8,
  },
  actionitemright:{
    textAlign: 'left',
    marginLeft: 12,
    display: 'flex',
    justifyContent: 'space-around',
  },
  actionitemrightname:{
    fontSize: 16,
    color: '#222834',
    width: 148,
    height: 22,
    marginBottom: 8,
  },
  acticon:{
    width: 24,
    height: 24,
    marginRight: 8,
  },
  actionname:{
    width: 100,
    height: 50,
    display: 'block',
    verticalAlign: 'middle',
  },
  actvalue:{
    width: 100,
    height: 50,
    textAlign: 'right',
    marginRight: 16,
    verticalAlign: 'middle',
  },
}

module.exports = {
  wxml,
  style
}
