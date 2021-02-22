Ext.define('AlphaOne.view.page_system.main.MainView', {
    //############################ INSTANTIATION ############################//
    extend: 'Ext.Container',
    xtype: 'mainview',
    controller: { type: 'mainviewcontroller' },
    viewModel: { type: 'mainviewmodel' },
    requires: [
        'Ext.layout.Fit',
        'Ext.panel.Resizer'
    ],
    
    //############################ PROPERTIES ############################//
    layout: 'fit',

    //############################ COMPONENTS ############################//
    items: [
        { xtype: 'navview',    reference: 'navview',    docked: 'left',   bind: {width:  '{navview_width}'}, listeners: { select: "onMenuViewSelectionChange"} },
        { xtype: 'headerview', reference: 'headerview', docked: 'top',    bind: {height: '{headerview_height}'} },
        { xtype: 'footerview', reference: 'footerview', docked: 'bottom', bind: {height: '{footerview_height}'} },
        { xtype: 'centerview', reference: 'centerview' },
        { xtype: 'detailview', reference: 'detailview', docked: 'right',  bind: {width:  '{detailview_width}'}  },
    ]
    
});
