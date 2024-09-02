// pages/my/my.js
var common = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // nickName:'未登录',
    // src:"/images/index.png",
    // newsList:[{
    //   id:'1',
    //   title:'中国海大志愿者完成第五届跨国公司领导人青岛峰会志愿服务',
    //   poster:'https://news.ouc.edu.cn/_upload/article/images/dd/19/ede76a4a4ebdb1d3ab278a12fdd8/9bb154f8-e33b-421a-b453-82c758a32405.jpg',
    //   add_date:'2024-08-31'
    // }],
    num:0
  },
  getMyInfo:function(e){
    // console.log(e.detail.userInfo)
    let info=e.detail.userInfo;
    this.setData({
      isLogin:true,
      src:info.avatarUrl,
      nickName:info.nickName
    })
    this.getMyFavorites();
  },
  
  getMyFavorites:function(){
    let info=wx.getStorageInfoSync();
    let keys=info.keys;
    let num=keys.length;

    let myList =[];
    for(var i=0;i < num;i++){
      let obj = wx.getStorageSync(keys[i]);
      myList.push(obj);
    }
    this.setData({
      newsList:myList,
        num:num
        });
  },
  goToDetail:function(e){
    //获取携带的 data-id 数据
    let id = e.currentTarget.dataset.id;
    //携带新闻ID进行页面跳转
    wx.navigateTo({
    url:'../detail/detail?id=' + id
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if(this.data.isLogin){
      this.getMyFavorites();
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})