var util = require('../../../utils/util.js');
var i18n = require('../../../utils/I18n_CH.js');
Page({
	data: i18n.i18n,
	onLoad: function() {

		var dateTime = util.getDateTime(new Date());
		var dayTime = util.getDayTime(new Date());
		this.setData({
			dateTime : dateTime,
			dayTime : dayTime
		});

	}
})
