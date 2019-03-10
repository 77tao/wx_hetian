const API_BASE_URL = 'http://www.hetianlab.com/'

const request = (url,method, data) => {
  return new Promise((resolve,reject) => {
    wx.request({
      url: API_BASE_URL + url,
      method:method,
      data:data,
      header:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success(res) {
        resolve(res.data)
      },
      fail(error) {
        reject(error)
      },
      complete() {

      }
    })
  })
}

module.exports = {
  request,
  queryCourseExpt:() => {
    return request('firstPage!queryCourseExpt.action','POST')
  },
  queryMainCourExpt: () => {
    return request('firstPage!queryMainCourExpt.action', 'POST')
  },
  queryCouExp: (pageNum) => {
    return request('knowInfo!queryCouExp.action', 'POST',{
      pageNum
    })
  },
  queryExp: (ecid) => {
    return request('newExp!queryVideoByEcid.action', 'POST',{
      ecid
    })
  },
  getExpAss: (ecid) => {
    return request('newExp!getExpAss.action', 'POST', {
      ecid
    })
  },
  queryRandExp: (ecid) => {
    return request('newExp!queryRandExp.action', 'POST', {
      ecid
    })
  },
}