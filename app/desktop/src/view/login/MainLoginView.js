Ext.define('AlphaOne.view.login.MainLoginView', {
    //############################ INITILIZATION ############################//
    extend: 'Ext.Container',
    xtype: 'mainloginview',
    requires: [
        'Ext.layout.Center'
    ],

    //############################ PROPERTIES ############################//
    layout: 'center',

    //############################ COMPONENTS ############################//
    items: [
        { xtype: 'loginview', bodyBorder: true, border: true, style: 'border: 1px solid #2375f6' },
    ]
    
});
