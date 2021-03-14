Ext.define('AlphaOne.view.page_custom.sysusers.SysusersView',{
    //############################ INSTANTIATION ############################//
    extend: 'Ext.grid.Grid',
    xtype: 'sysusersview',
    requires: [
        'Ext.grid.rowedit.Plugin',
        'Ext.grid.column.RowNumberer'
    ],
    controller: {type: 'sysusersviewcontroller'},
    viewModel: {type: 'sysusersviewmodel'},
    store: {type: 'sysusersviewstore'},

    //############################ PROPERTIES ############################//
    cls: 'sysusersview',
    grouped: true,
    groupFooter: {
        xtype: 'gridsummaryrow'
    },
    plugins: {
        rowedit: {
            autoConfirm: false
        }
    },

    //############################ COMPONENTS ############################//
    dockedItems: [{
        dock: 'top',
        xtype: 'toolbarlistview',
        height: 30
    }],
    columns: [
        {xtype: 'rownumberer'},
        {
            text: 'Name',
            dataIndex: 'name',
            editable: true,
            width: 100,
            cell: {userCls: 'bold'}
        },
        {text: 'Email',dataIndex: 'email',editable: true, width: 230},
        {
            text: 'Phone',
            dataIndex: 'phone',
            editable: true,
            width: 150
        }
    ],

    //############################ LISTENERS ############################//
    listeners: {
        canceledit: 'onEditCancelled'
    }
});
