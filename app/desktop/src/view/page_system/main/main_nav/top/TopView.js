Ext.define('AlphaOne.view.page_system.main.main_nav.top.TopView', {
    //############################ INSTANTIATION ############################//
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
                html: '{name} &trade;',
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