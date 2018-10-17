//app.js
App({
  onLaunch: function () {
    //微信登陆
    // wx.login({
    //   success: function (res) {
    //     var code = res.code;
    //     if (code) {
    //       console.log('获取用户登录凭证：' + code);
    //     } else {
    //       console.log('获取用户登录态失败：' + res.errMsg);
    //     }
    //   }
    // });

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

  },
  globalData: {
    userInfo: null
  }
})