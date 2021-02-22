Ext.define('AlphaOne.view.main.nav.NavView', {
    //############################ INSTANTIATION ############################//
    extend: 'Ext.Panel',
    xtype: 'navview',
    controller: "navviewcontroller",

    //############################ PROPERTIES ############################//
    cls: 'navview',
    layout: 'fit',

    //############################ COMPONENTS ############################//
    tbar: {xtype: 'topview', bind: {height: '{topview_height}'}},

    items: [ 
        {
            xtype: 'menuview', 
            reference: 'menuview', 
            bind: {width: '{menuview_width}'}, 
            listeners: { 
                selectionchange: "onMenuViewSelectionChange"
            }
        }
    ],

    bbar: {xtype: 'bottomview', bind: {height: '{bottomview_height}'}}
    
});
