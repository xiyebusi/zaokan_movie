// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordNumber: 0,
    watchNumber: 0,
    favouriteNumber: 0,
    // recordList: [{
    //   post: 'http://wx4.sinaimg.cn/mw690/80df6fe6gy1fw1qpdnrs2j20u018g7c2.jpg',
    //   name: '毒液：致命守护者 Venom',
    //   src:''
    // }, 
    // {
    //   post: 'http://wx4.sinaimg.cn/mw690/80df6fe6ly1fwamw7hkxvj205006k0ta.jpg',
    //   name: '我要静静',
    //   src: ''
    //   },
    //   {
    //     post: 'http://wx4.sinaimg.cn/mw690/80df6fe6ly1fwamw4lqn4j205006kdg7.jpg',
    //     name: '狄仁杰之蚩尤血藤',
    //     src: ''
    //   }]
    recordList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.getUserInfo({
      success: function (res) {
        // that.setData({
        //   userInfo: res.userInfo
        // })
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})