Ext.define('AlphaOne.view.page_system.main.main_detail.DetailView', {
    //############################ INSTANTIATION ############################//
    extend: 'Ext.Container',
    xtype: 'detailview',

    //############################ PROPERTIES ############################//
    cls: 'detailview',
    layout: 'fit',

    //############################ COMPONENTS ############################//
    items: [
      {
        xtype: 'container', 
        style: 'background: white', 
        html: '<div style="padding:10px;font-size:24px;">Ini DetailView</div>'
      }
    ]

});