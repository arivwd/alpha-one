Ext.define('AlphaOne.view.page_system.main.MainViewController', {
	//############################ INSTANTIATION ############################//
	extend: 'Ext.app.ViewController',
	alias: 'controller.mainviewcontroller',
	routes: { 
		':xtype': {action: 'mainRoute'}
	},

	//############################ METHODS ############################//
	mainRoute:function(xtype) {
		var navview = this.lookup('navview');
		var headerview = this.lookup('headerview');
		var footerview = this.lookup('footerview');
		var centerview = this.lookup('centerview');

		//TODO: Widget toolbarlistview belum terdeteksi
		var toptoolbargridview = this.lookup('toptoolbargridview');
		console.log(toptoolbargridview);

		//var menuview = this.lookup('menuview');
		var menuview = navview.items.items[0];

		var exists = Ext.ClassManager.getByAlias('widget.' + xtype);
		if (exists === undefined) {
			console.log(xtype + ' does not exist');
			return;
		}
		var node = menuview.getStore().findNode('xtype', xtype);
		if (node == null) {
			console.log('unmatchedRoute: ' + xtype);
			return;
		}

		//TODO: Harus ditambahkan Tab baru on-the-fly di centerview
		if (!centerview.getComponent(xtype)) {
			centerview.add({ 
				'xtype': xtype,  
				'itemId': xtype, 
				'heading': node.get('text') 
			});
		}

		centerview.setActiveItem(xtype);
		menuview.setSelection(node);
		
		var vm = this.getViewModel(); 
		vm.set('heading', 'Halaman : ' + node.get('text'));
	},

	//############################ LISTENERS ############################//
	onMenuViewSelectionChange: function (tree, node) {
		if (node == null) { return }
		var vm = this.getViewModel();
		if (node.get('xtype') != undefined) {
			this.redirectTo( node.get('xtype') );
		}
	},
	onTopViewNavToggle: function () {
		var vm = this.getViewModel();
		vm.set('navCollapsed', !vm.get('navCollapsed'));
	},
	onBottomViewlogout: function () {
		localStorage.setItem("LoggedIn", false);
		this.getView().destroy();
		Ext.Viewport.add([{ xtype: 'loginview'}]);
	},
	// onActionsViewLogoutTap: function( ) {
	// 	var vm = this.getViewModel();
	// 	vm.set('firstname', '');
	// 	vm.set('lastname', '');

	// 	Session.logout(this.getView());
	// 	this.redirectTo(AppCamp.getApplication().getDefaultToken().toString(), true);
	// }

});
