Ext.define('AlphaOne.view.main.nav.bottom.BottomView', {
	//############################ INITILIZATION ############################//
	extend: 'Ext.Toolbar',
	xtype: 'bottomview',

	//############################ PROPERTIES ############################//
	cls: 'bottomview',
	shadow: false,

	//############################ COMPONENTS ############################//
	items: [
		{
			xtype: 'button',
			ui: 'bottomviewbutton',
			iconCls: 'x-fa fa-angle-double-left',
			text: 'Logout',
			//handler: 'onBottomViewlogout'
		}
	]

});
