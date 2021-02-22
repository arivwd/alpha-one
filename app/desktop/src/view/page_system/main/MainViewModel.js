Ext.define('AlphaOne.view.page_system.main.MainViewModel', {
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
		detailCollapsed:     true,
		detailview_width:      10,
		detailview_max_width: 250,
		detailview_min_width:   0,
	},
	formulas: {
		navview_width: function(get) {
			return get('navCollapsed') ? get('navview_min_width') : get('navview_max_width');
		},
		detailview_width: function(get) {
			return get('detailCollapsed') ? get('detailview_min_width') : get('detailview_max_width');
		}
	},
	stores: {
		menu: {
			"type": "tree",
			"root": {
				"expanded": true,
				"children": [
          			{ "text": "Home", "iconCls": "x-fa fa-home", "xtype": "homeview", "leaf": true },
					{ "text": "Personnel", "iconCls": "x-fa fa-table", "xtype": "personnelview","leaf": true },
					//add new items on the next line (from sencha-node generate viewpackage)
				]
			}
		}
	}

});