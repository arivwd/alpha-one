Ext.define('AlphaOne.view.login.LoginViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.loginviewcontroller',
	
	onLogin: function () {
		var whichViewToSwitch = 'mainview';
		Ext.Viewport.removeAll();
		Ext.Viewport.add([{xtype: whichViewToSwitch}])
	},
});
