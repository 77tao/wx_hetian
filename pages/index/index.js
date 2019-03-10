const API = require('../../utils/api')
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      '/images/banner/banner_01.jpg',
      '/images/banner/banner_02.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    courseNewList:null,
    courseHotList:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.queryCourseExpt()
    this.queryMainCourExpt()
  },
  /**
   * 加载最新推荐
   */
  queryCourseExpt:function(){
    let that = this
    API.queryCourseExpt().then(function (res) {
      let temp = res.message.map(function(data){
        return {
          id: data.id,
          imgUrl: data.imgUrl,
          name: data.name,
          price: data.price,
          difficulty: data.difficulty,
          createTime: util.formatTime(new Date())
        }
      })
      that.setData({
        courseNewList: temp
      })
    }).catch(function () {

    })
  },
  /**
   * 加载主打推荐
   */
  queryMainCourExpt:function() {
    let that = this
    API.queryMainCourExpt().then(function (res) {
      let temp = res.message(function(res){
        return {
          id: data.id,
          imgUrl: data.imgUrl,
          name: data.name,
          price: data.price,
          difficulty: data.difficulty,
          createTime: util.formatTime(new Date())
        }
      })
      that.setData({
        courseHotList: temp
      })
    }).catch(function () {

    })
  },
})