var oI18n = require('../../../utils/I18n_CH.js');

Page({
  data: oI18n.i18n,
  onLoad: function() {
  	wx.setNavigationBarTitle({
      title: oI18n.i18n.Signup_Header,
    })
  }
})
