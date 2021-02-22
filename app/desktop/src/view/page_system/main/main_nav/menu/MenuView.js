Ext.define('AlphaOne.view.page_system.main.main_nav.menu.MenuView', {
    //############################ INSTANTIATION ############################//
    extend: 'Ext.list.Tree',
    xtype: 'menuview',
    requires: [
        'Ext.data.TreeStore',
    ],
    
    //############################ PROPERTIES ############################//
    ui: 'nav',
    scrollable: true,
    bind: { 
        store: '{menu}', 
        micro: '{navCollapsed}' 
    },
    expanderFirst: false,
    expanderOnly: false

});
