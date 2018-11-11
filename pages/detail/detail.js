// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    movieName:'碟中谍6:全面瓦解',
    movieActors: '汤姆·克鲁斯 / 亨利·卡维尔 / 文·瑞姆斯 / 西蒙·佩吉 / 西蒙·佩吉',
    introduce:"有时好意会造成恶果，人反而被自己所造成的结果所困扰。伊桑·亨特（汤姆·克鲁斯）和他的IMF团队（亚历克·鲍德温、西蒙·佩吉、文·瑞姆斯）将在最新的电影《碟中谍6：全面瓦解》中再度回归，他们会与观众们熟悉的盟友（丽贝卡·弗格森、米歇尔·莫娜汉）一起与时间赛跑，应对一次任务中出现的意外。亨利·卡维尔、安吉拉·贝塞特和凡妮莎·柯比也将加入本片的演员阵容，电影制片人克里斯托夫·迈考利将会再度担任导演。"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    wx.request({
      url: 'https://zaokanmovie.yusdaq.com/zaokan/detail?id=' + options.id, 
      data: {},
      method: 'get',
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        let movie = res.data.movie;
        that.setData({
          id : movie.id,
          src: movie.src,
          movieName: movie.name,
          movieActors: movie.actors,
          introduce: movie.description
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  source_tap :function(){
    let data = {id:this.data.id}
    this.onLoad(data);
  },
  share:function(){
    wx.showShareMenu({
      withShareTicket: true,
      success:function(res){
        wx.showToast({
          title: '分享成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  }
})