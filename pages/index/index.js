//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperItems: [],
    currentSwiper: 0,
    searchContent:"",
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
    movieItems: [
    ],
    count: 6
  },
  onLoad: function() {
    // 懒加载方式加载
    // this.viewPort();
    const that = this;
    wx.request({
      url: 'https://zaokanmovie.yusdaq.com/zaokan/index', //仅为示例，并非真实的接口地址
      data: {},
      method: 'get',
      header: {
        // 'content-type': 'application/json'
        'Content-Type': 'json'
      },
      success: function (res) {
        console.log(res.data.movieItems)
        that.setData({
          movieItems: res.data.movieItems,
          swiperItems: res.data.swiperItems
        })
      }
    })

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
  },
  movie_tap : function(e){
    let id = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
  },
  search_content : function(e){
    this.data.searchContent = e.detail.value;
  },
  search_movie: function(e){
    const that = this;
    wx.request({
      url: 'https://zaokanmovie.yusdaq.com/zaokan/query_movie?name='+that.data.searchContent, 
      data: {},
      method: 'get',
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        console.log(res.data.movieItems)
        that.setData({
          movieItems: res.data.movieItems,
        })
      }
    })
  }
})