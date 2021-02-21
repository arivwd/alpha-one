Ext.define('AlphaOne.view.main.nav.top.TopView', {
    //############################ INITILIZATION ############################//
    extend: 'Ext.Toolbar',
    xtype: 'topview',

    //############################ PROPERTIES ############################//
    cls: 'topview',
    shadow: false,

    //############################ COMPONENTS ############################//
    items: [
        {
            xtype: 'container', 
            cls: 'topviewtext',
            bind: { 
                html: '{name}',
                hidden: '{navCollapsed}' 
            }
        },
        '->',
        {
            xtype: 'button',
            ui: 'topviewbutton',
            reference: 'navtoggle',
            handler: 'onTopViewNavToggle',
            iconCls: 'x-fa fa-navicon'
        }
    ]
});