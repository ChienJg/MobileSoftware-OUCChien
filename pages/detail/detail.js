// pages/detail/detail.js
var common = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // article:{
    //   id:'1',
    //   title:'中国海大志愿者完成第五届跨国公司领导人青岛峰会志愿服务',
    //   poster:'https://news.ouc.edu.cn/_upload/article/images/dd/19/ede76a4a4ebdb1d3ab278a12fdd8/9bb154f8-e33b-421a-b453-82c758a32405.jpg',
    //   content:'8月27日至29日，第五届跨国公司领导人青岛峰会在青岛国际会议中心举办。为全面做好服务保障，确保峰会顺利举行，中国海洋大学招募选派115名志愿者参与峰会志愿服务，志愿者们以饱满的热情完成本次大会的各项工作，累计服务时长3000余小时，用实际行动展现中国海大青年风采。\n前期，学校团委根据峰会安排及各工作组志愿者需求，面向崂山校区15个学部、学院（中心）进行志愿者选拔招募，并邀请青岛团市委、峰会组委会相关专家对志愿者开展了峰会情况介绍、志愿服务礼仪与规范、大型赛会志愿服务知识与技能等系统培训。\n峰会举办期间，学校志愿者在4个工作组分别参与会务服务、媒体接待、酒店接待、交通抵离、青企峰会、人力资源高质量发展对话会等15个组别的工作任务。中国海大青年志愿者用耐心热心的服务态度、吃苦耐劳的坚韧品质、蓬勃向上的服务热情赢得广泛赞誉。\n恰逢学校百年华诞，此次峰会的志愿服务为志愿者和学校志愿服务工作提供了宝贵经验，也为学校建校100周年系列庆祝活动志愿服务夯基蓄力。学校团委将继续以服务大型赛会为依托，完善志愿服务工作体系，引领学生在志愿服务中成长成才，挺膺担当。\n通讯员：周星宇 张卓越 图：段玉军 中国海大青年志愿者',
    //   add_date:'2024-08-31'
    // }
  },
  addFavorites:function(options){
    let article = this.data.article;
    wx.setStorageSync(article.id,article);
    this.setData({isAdd:true});
  },
  cancelFavorites:function(options){
    let article = this.data.article;
    wx.removeStorageSync(article.id);
    this.setData({isAdd:false});
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let id = options.id

    var article = wx.getStorageSync(id)//已存在
    if(article !=''){
      this.setData({
        article:article,
        isAdd: true
      })
    }
    else{
    let result = common.getNewsDetail(id)
    //获取到新闻内容
    if(result.code=='200'){
      this.setData({article:result.news})
      isAdd:false;
    }
  }
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