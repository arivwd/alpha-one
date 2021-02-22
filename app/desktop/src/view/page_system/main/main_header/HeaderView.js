Ext.define('AlphaOne.view.page_system.main.main_header.HeaderView', {
    //############################ INSTANTIATION ############################//
    extend: 'Ext.Toolbar',
    xtype: 'headerview',
    
    //############################ PROPERTIES ############################//
    cls: 'headerview',
    
    //############################ COMPONENTS ############################//
    items: [
        { 
            xtype: 'container',
            cls: 'headerviewtext',
            bind: { html: '{heading}' }
        },
        '->',
        {
            xtype: 'button',
            ui: 'headerbutton',
            reference: 'detailtoggle',
            handler: 'onHeaderViewDetailToggle',
            iconCls: 'x-fa fa-arrow-left'
        }
    ]
    
});
