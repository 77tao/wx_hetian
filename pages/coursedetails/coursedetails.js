const API = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseId:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      courseId: options.id
    })
    // this.queryExp()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  queryExp: function () {
    let that = this
    console.log(this.data.courseId)
    API.queryExp(this.data.courseId).then(function (res) {
      
    }).catch(function () {

    })
  },

})