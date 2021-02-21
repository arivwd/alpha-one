Ext.define('AlphaOne.view.main.header.HeaderView', {
    //############################ INITILIZATION ############################//
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
