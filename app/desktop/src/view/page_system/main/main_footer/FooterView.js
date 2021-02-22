Ext.define('AlphaOne.view.page_system.main.main_footer.FooterView', {
    //############################ INSTANTIATION ############################//
    extend: 'Ext.Toolbar',
    xtype: 'footerview',

    //############################ PROPERTIES ############################//
    cls: 'footerview',
    
    //############################ COMPONENTS ############################//
    items: [
        {
            xtype: 'container',
            cls: 'footerviewtext',
            html: 'Ini Footer (Ext JS version: ' + Ext.versions.extjs.version + ')',
            //bind: { html: '{name} footer' }
        }
    ]

});
