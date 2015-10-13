var Menu = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    name: "",
    description: "",
    price: 0,
    type: "",
  }
});

export default Menu;
