Ext.define('AlphaOne.view.page_system.login.LoginView', {
    //############################ INSTANTIATION ############################//
    extend: 'Ext.form.Panel',
    xtype: 'loginview',
    controller: {type: 'loginviewcontroller'},
    viewModel: {type: 'loginviewmodel' },
    requires: [
        'Ext.field.Password'
    ],

    //############################ PROPERTIES ############################//
    title: 'AlphaOne',
    bodyPadding: 10,
    width: 400,
    autoSize: true,
    
    //############################ COMPONENTS ############################//
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
        handler: 'doLogin'
    }]

});
