const API = require('../../utils/api')
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseId:null,
    courseList:null,
    isShowVideo:false,
    videoSrc:null,
    evaluateList:null,
    recommendList:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      courseId: options.id
    })
    this.queryExp()
    this.getExpAss()
    this.queryRandExp()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  queryExp: function () {
    let that = this
    API.queryExp(this.data.courseId).then(function (res) {
      that.setData({
        courseList:res.message[0]
      })
    }).catch(function () {

    })
  },
  openVideo:function(){
    this.setData({
      isShowVideo:true,
videoSrc:'https://valipl.cp31.ott.cibntv.net/67740C80B78387169D9A66C1D/03000801005C78C167590FC003E88076E3C6AB-8A47-4F07-ABE6-5CA1173321C7.mp4?ccode=0502&duration=390&expire=18000&psid=1aa4095831fe3ec2de47f381ac96fa50&ups_client_netip=7b715db4&ups_ts=1552204871&ups_userid=&utid=%2BI10Ez5qNXQCAd3bNzeQQzEr&vid=XNDA4NzYxNzE2MA%3D%3D&vkey=A49e82eae06e827aca3a2c9d5377305f2'
    })
  },
  getExpAss:function(){
    let that = this
    API.getExpAss(this.data.courseId).then(function(res){
      let temp = res.message.map(function(data){
         return {
           userPicture: data.userPicture,
           userName: data.userName,
           assessment: data.assessment,
           expName: data.expName,
           createTime: util.formatTime(new Date())
         }
      })
      that.setData({
        evaluateList: temp
      })
    })
  },
  queryRandExp:function(){
    let that = this
    API.queryRandExp(this.data.courseId).then(function (res) {
      that.setData({
        recommendList: res.message
      })
    })
  }
})