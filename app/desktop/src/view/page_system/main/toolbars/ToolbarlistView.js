Ext.define('AlphaOne.view.page_system.main.toolbars.ToolbarlistView', {
    //############################ INSTANTIATION ############################//
    extend: 'Ext.Toolbar',
    xtype: 'toolbarlistview',

    //############################ PROPERTIES ############################//
    
    //############################ COMPONENTS ############################//
    items: [{
        text: 'New',
        icon: '/images/icon16x16/add.png',
        action: 'doInsert'
    },'-',{
        text: 'Refresh',
        icon: '/images/icon16x16/refresh.png',
        action: 'doRefresh'
    },'-',{
        text: 'Delete',
        icon: '/images/icon16x16/delete.png',
        action: 'doDelete',
        disabled: true
    },'-',{
        text: 'Preview',
        icon: '/images/icon16x16/view.png',
        action: 'doPreview'
    },'->',{
        icon: '/images/icon16x16/find.png',
        enableToggle: true,
        disabled: true,
        action: 'doResetFilter'
    },{
        text: 'Search',
        action: 'doSearch',
        listeners: {
            click: function(btn) {
                //Kalo strat-searching maka lakukan actions dibawah ini...!
                // btnResetFilter = btn.previousNode('button');
                // btnResetFilter.setDisabled(false);
                // btnResetFilter.toggle(true);
            }
        }
    },'-',{
        text: 'As Window',
        icon: '/images/icon16x16/windows.png',
        action: 'doWindowed'
    }]

});
