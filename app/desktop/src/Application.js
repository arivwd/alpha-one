Ext.define('AlphaOne.Application', {
	//############################ INITILIZATION ############################//
	extend: 'Ext.app.Application',
	requires: ['AlphaOne.*'],
	
	//############################ PROPERTIES ############################//
	name: 'AlphaOne',
	defaultToken: 'selamatdatang',

	//############################ METHODS ############################//
	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},
	launch: function () {
		this.removeSplash()
		var whichView = 'mainloginview'
		Ext.Viewport.add([{xtype: whichView}])
	},
	onAppUpdate: function () {
		Ext.Msg.confirm('Pembaruan Aplikasi', 'Aplikasi ini sudah diperbarui, apakah Anda ingin me-reload Aplikasi ?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}

});
