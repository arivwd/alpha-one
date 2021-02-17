Ext.define('AlphaOne.view.login.LoginView', {
    extend: 'Ext.form.Panel',
    xtype: 'pleaselogin',
    controller: 'loginviewcontroller',
    viewModel: {
        type: 'loginviewmodel'
    },
    requires: [
        'Ext.field.Password'
    ],

    title: 'AlphaOne',
    bodyPadding: 10,
    width: 400,
    autoSize: true,
    
    items: [{
        xtype: 'textfield',
        allowBlank: false,
        required: true,
        label: 'Nama Pengguna',
        name: 'user',
        placeholder: 'Masukkan nama pengguna'
    }, {
        xtype: 'passwordfield',
        allowBlank: false,
        required: true,
        label: 'Kata Kunci',
        name: 'pass',
        placeholder: 'Masukkan kata kunci'
    }, {
        xtype: 'checkbox',
        boxLabel: 'Ingatkan Nama Pengguna',
        name: 'remember'
    }],

    buttons: [{
        text: 'Mulai',
        handler: 'onLogin'
    }]
});
