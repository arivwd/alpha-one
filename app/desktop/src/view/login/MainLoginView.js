Ext.define('AlphaOne.view.login.MainLoginView', {
    extend: 'Ext.Container',
    xtype: 'mainloginview',
    requires: [
        'Ext.layout.Center'
    ],
    layout: 'center',

    items: [
        { xtype: 'loginview', bodyBorder: true, border: true, style: 'border: 1px solid #999' },
    ]
});
