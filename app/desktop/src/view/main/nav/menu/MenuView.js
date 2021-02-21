Ext.define('AlphaOne.view.nav.menu.MenuView', {
    //############################ INITILIZATION ############################//
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
