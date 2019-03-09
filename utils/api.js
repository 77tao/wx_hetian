const API_BASE_URL = 'http://www.hetianlab.com/'

const request = (url,method, data) => {
  return new Promise((resolve,reject) => {
    wx.request({
      url: API_BASE_URL + url,
      method:method,
      data:data,
      header:{
        'Content-Type': 'application/json'
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
  queryCouExp: () => {
    return request('knowInfo!queryCouExp.action', 'POST')
  },
  queryExp: (ecid) => {
    return request('queryPhoneExpByECid.action?', 'POST',{
      ecid
    })
  }
}