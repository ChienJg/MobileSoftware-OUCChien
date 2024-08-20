// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['北京市','北京市','东城区'],
    now:''
  },
  RegionChange:function(e){
    this.setData({
      region:e.detail.value
    })
    this.getMessage();
    // this.getlocationID();
  },
  // getlocationID:function(){
  //   var that=this;/*因为this不能直接在wxAPI函数内部使用 */    wx.request({
  //     url: 'https://geoapi.qweather.com/v2/city/lookup?',
  //     data:{
  //       location:that.data.region,
  //       key:'63c721dac714431082585047d7afdf70'
  //     },
  //     success:function(res){
  //       console.log(res.data)
  //       console.log(res.location.name)
  //     },
  //   })
  //   this.getWeather();
  // },
  getMessage:function() {
    var that=this; //this不可以直接在wxAPI中使用
    wx.request({ //寻找城市ID
    url: 'https://geoapi.qweather.com/v2/city/lookup?',
    data:{
    location:that.data.region[2],
    key:'63c721dac714431082585047d7afdf70'
    },
    success:function(res){ //如果城市ID找到了，则找对应ID的城市详细信息
    that.setData({Place_ID:res.data.location[0].id}) //将城市ID用变量存储
    // console.log(res.data);
    wx.request({ //寻找城市的详细信息
    url: 'https://devapi.qweather.com/v7/weather/now?',
    data: {
    location:that.data.Place_ID,
    key:'63c721dac714431082585047d7afdf70'
    },
    success:function(res){ //如果找到了
    //  console.log(res.data)
    that.setData({now:res.data.now}) //将详细信息用Place_Message存储
    
}
})
}
})
},
  // getWeather:function(){
  //   var that=this;/*因为this不能直接在wxAPI函数内部使用 */
  //   // ID=getlocationID();
  //   wx.request({
  //     url: 'https://devapi.qweather.com/v7/weather/now?',
  //     data:{
  //       location:that.data.region[1],
  //       key:'63c721dac714431082585047d7afdf70'
  //     },
  //     success:function(res){
  //       console.log(res.data)
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getMessage();
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