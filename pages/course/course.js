const API = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couseList:null
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
    this.queryCouExp()
  },

  /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
  onPullDownRefresh: function () {
    this.queryCouExp()
  },

  queryCouExp: function () {
    let that = this
    wx.showLoading({
      title: '拼命加载中',
    })
    API.queryCouExp().then(function (res) {
      wx.hideLoading()
      that.setData({
        couseList: res.message
      })
    }).catch(function () {

    })
  }
})