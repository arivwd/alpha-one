Ext.define('AlphaOne.view.login.MainLoginView', {
    extend: 'Ext.Container',
    xtype: 'mainloginview',
    requires: [
        'Ext.layout.Center'
    ],
    layout: 'center',

    items: [
        { xtype: 'pleaselogin', bodyBorder: true, border: true, style: 'border: 1px solid #999' },
    ]
});
