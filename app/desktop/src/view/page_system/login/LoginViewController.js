Ext.define('AlphaOne.view.page_system.login.LoginViewController', {
	//############################ INSTANTIATION ############################//
	extend: 'Ext.app.ViewController',
	alias: 'controller.loginviewcontroller',
	
	//############################ METHODS ############################//
	doLogin: function () {
		var app = AlphaOne.getApplication();
		var whichViewToSwitch = 'mainview';

		Ext.Viewport.removeAll();
		Ext.Viewport.add([{xtype: whichViewToSwitch}]);		
	}
	
});
