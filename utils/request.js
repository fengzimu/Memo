import config from '../config.js'

const hostUrl = config.hostUrl
const apiUrl = config.apiUrl

var Get = function(params) {
  params.method = 'GET'
  _request(params)
}

var Post = function(params) {
  params.method = 'POST'
  _request(params)
}

var Put = function(params) {
  params.method = 'PUT'
  _request(params)
}

var Delete = function(params) {
  params.method = 'DELETE'
  _request(params)
}

var _request = function(params) {
  wx.showLoading({
    title: 'loading',
    mask: true
  })

  var data = {}

  var success, fail, complete, method;
  success = fail = complete = function({}) {}
  method = 'GET'

  if(params.method) {
    method = params.method
  }

  if(params.complete) {
    complete = params.complete
  }

  if(params.success) {
    success = params.success
  }

  if(params.fail) {
    fail = params.fail
  }

  if(params.data) {
    data = Object.assign(data, params.data)
  }

  wx.request({
    url: apiUrl + params.url,
    method: method,
    data: data,
    success: function(res) {
      console.log(res)
      return success(res)
    },
    fail: function(res) {
      return fail(res)
    },
    complete: function(res) {
      wx.hideLoading()
      return complete(res)
    }
  })
}

module.exports = {
  get: Get,
  post: Post,
  put: Put,
  delete: Delete,
  hostUrl: hostUrl,
  apiUrl: apiUrl 
}
