Ext.define('AlphaOne.view.login.LoginViewController', {
	//############################ INITILIZATION ############################//
	extend: 'Ext.app.ViewController',
	alias: 'controller.loginviewcontroller',
	
	//############################ METHODS ############################//
	onLogin: function () {
		var app = AlphaOne.getApplication();
		var whichViewToSwitch = 'mainview';

		Ext.Viewport.removeAll();
		Ext.Viewport.add([{xtype: whichViewToSwitch}]);		
	}
	
});
