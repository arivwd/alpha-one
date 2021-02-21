Ext.define('AlphaOne.view.main.nav.NavViewController', {
	//############################ INITILIZATION ############################//
	extend: "Ext.app.ViewController",
	alias: "controller.navviewcontroller",

	//############################ METHODS ############################//
	initViewModel: function(vm) {},

	onTopViewNavToggle: function () {
		var vm = this.getViewModel();
		vm.set('navCollapsed', !vm.get('navCollapsed'));
	},

	onMenuViewSelectionChange: function(tree, node) {
		if (!node) {
				return;
		}
		this.fireViewEvent("select", node);
	}
	
});
