Ext.define('AlphaOne.view.page_system.main.main_nav.NavViewController', {
	//############################ INSTANTIATION ############################//
	extend: "Ext.app.ViewController",
	alias: "controller.navviewcontroller",

	//############################ PROPERTIES ############################//
	initViewModel: function(vm) {},

	//############################ LISTENERS ############################//
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
