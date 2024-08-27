// pages/index.js
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    list:[{
      id:"1",
      title:"丁万鼎先生口述校史实录",
      myurl:"https://arch.ahnu.edu.cn/__local/E/C4/C6/2FA3CC5D4DA93185527F920C28E_954D5659_673B0872.mp4?e=.mp4"
    },{
      id:"2",
      title:"朱典淼先生口述校史实录",
      myurl:"https://arch.ahnu.edu.cn/__local/B/52/86/1731F6FB7077EF261442599B4A7_E6CF9980_7BEB237B.mp4?e=.mp4"
    },{
      id:"3",
      title:"王守恒先生口述校史实录",
      myurl:"https://arch.ahnu.edu.cn/__local/A/61/FC/CF209EB9D06A0258FBCDFC5FBCE_079530CA_6D1D000F.mp4?e=.mp4"
    },{
      id:"4",
      title:"房列曙先生口述校史实录",
      myurl:"https://arch.ahnu.edu.cn/__local/D/18/E4/DBFF5D0544D2CC2D12117A825C1_A14D1570_7B4A32E0.mp4?e=.mp4"
    }],
    danmuTxt:'',
    ccolor:"normal"
  },
  getDanmu: function(e){
    this.setData({
      danmuTxt: e.detail.value
    })
  },
  /**
  * 发送弹幕
  */
  sendDanmu: function(e){
    let text = this.data.danmuTxt;
    this.videoCtx.sendDanmu({
      text:text,
      color:'red'
    })
  },
  /**
  * 发送弹幕
  */
 sendDanmu: function(e){
  let text = this.data.danmuTxt;
  function getRandomColor(){
    let rgb=[]
    for(let i =0; i<3; i++)
    {
      let color = Math.floor(Math.random()*256).toString(16)
      color=color.length == 1?'0' + color:color
      rgb.push(color)
    }
    return '#'+rgb.join('')
   }
  this.videoCtx.sendDanmu({
    text:text,
    color:getRandomColor()
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  playVideo:function(e){
  // console.log(e.currentTarget.dataset.url);
  this.videoCtx.stop()
  this.setData({
    src:e.currentTarget.dataset.url,
  })
    this.videoCtx.play()
  },

  onLoad:function(options) {
    this.videoCtx=wx.createVideoContext("myvideo")
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