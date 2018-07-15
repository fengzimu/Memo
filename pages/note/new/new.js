var util = require('../../../utils/util.js');
var oI18n = require('../../../utils/I18n_CH.js');
Page({
	data: oI18n.i18n,
	onLoad: function() {

		var dateTime = util.getDateTime(new Date());
		var dayTime = util.getDayTime(new Date());
		this.setData({
			dateTime : dateTime,
			dayTime : dayTime
		});

	}
})
