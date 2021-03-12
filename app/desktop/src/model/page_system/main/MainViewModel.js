Ext.define('AlphaOne.model.page_system.main.MainViewModel', {
	//############################ INSTANTIATION ############################//
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.mainviewmodel',

	//############################ CONFIG ############################//
	data: {
		name: 'AlphaOne',
		navCollapsed:       false,
		navview_max_width:    250,
		navview_min_width:     50,
		topview_height:        80,
		bottomview_height:     50,
		
		headerview_height:     80,
		footerview_height:     50,
	},
	formulas: {
		navview_width: function(get) {
			return get('navCollapsed') ? get('navview_min_width') : get('navview_max_width');
		}
	},
	stores: {
		menu: {
			"type": "tree",
			"root": {
				"expanded": true,
				"children": [
          			{ "text": "Home", "iconCls": "x-fa fa-home", "xtype": "homeview", "leaf": true },
					{ 
						"text": "Setting", 
						"iconCls": "x-fa fa-table", 
						children: [{
							"text": "Users",
							"leaf": true,
							"xtype": "sysusersview"
						},{
							"text": "Roles",
							"leaf": true
						},{
							"text": "Variables",
							"leaf": true
						}],
					},
					//add new items on the next line (from sencha-node generate viewpackage)
				]
			}
		}
	}

});
