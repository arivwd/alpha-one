Ext.define('AlphaOne.view.page_system.main.main_nav.bottom.BottomView', {
	//############################ INSTANTIATION ############################//
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
