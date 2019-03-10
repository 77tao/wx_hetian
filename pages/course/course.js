const API = require('../../utils/api')
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couseList:null,
    isShow:false,
    pageNum:1,
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

  queryCouExp: function () {
    let that = this
    wx.showLoading({
      title: '拼命加载中',
    })
    API.queryCouExp(that.data.pageNum).then(function (res) {
      wx.hideLoading()
      let temp = res.message.map(function(data){
        return {
          id:data.id,
          picture: data.picture,
          name: data.name,
          coin: data.coin,
          diffculty: data.diffculty,
          createTime: util.formatTime(new Date())
        }
      })
      that.setData({
        couseList: temp
      })
    }).catch(function () {

    })
  },
  lower:function(){
    
  }
})