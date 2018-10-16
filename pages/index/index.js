//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperItems: [{
      "url": "",
      "imgUrl": "https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=18101520"
    }, {
      "url": "",
      "imgUrl": "https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=18101520"
    }, {
      "url": "",
      "imgUrl": "https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=18101520"
    }, {
      "url": "",
      "imgUrl": "https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=18101520"
    }],
    currentSwiper: 0,
    types: [{
        "name": "电影",
        "id": "movie",
        "ischecked": true
      },
      {
        "name": "电视剧",
        "id": "tvPlay",
        "ischecked": false
      },
      {
        "name": "综艺",
        "id": "variety",
        "ischecked": false
      },
      {
        "name": "视频",
        "id": "video",
        "ischecked": false
      }
    ],
    movieItems: [{
        "id": 1
      },
      {
        "id": 2
      },
      {
        "id": 3
      },
      {
        "id": 4
      },
      {
        "id": 5
      },
      {
        "id": 6
      }
    ],
    count: 6
  },
  onLoad: function() {
    this.viewPort();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

  },
  //懒加载方法
  viewPort: function() {
    const that = this;
    var intersectionObserver = wx.createIntersectionObserver();
    intersectionObserver.relativeToViewport({
      bottom: 200
    }).observe('.movie_id_' + this.data.count, (ret) => {
      if (ret.intersectionRatio > 0) {
        intersectionObserver.disconnect();
        //模拟ajax加载数据
        let count = this.data.count;
        let items = this.data.movieItems;
        for (let i = 1; i <= 6; i++) {
          items.push({
            'id': count + i
          });
        }
        this.data.count = count + 6;
        this.setData({ // 更新数据
          movieItems: items
        }, () => {
          that.viewPort();
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //点击不同类型电影种类
  typeRadioChange: function(e) {
    //radio发生变化
    var types = this.data.types;
    for (let typeinfo of types) {
      if (typeinfo.id == e.detail.value) {
        typeinfo.ischecked = true;
      } else {
        typeinfo.ischecked = false;
      }
    }
    this.setData({
      types: types
    })
    //数据发生更改,ajax重新请求数据
  },
  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  }
})