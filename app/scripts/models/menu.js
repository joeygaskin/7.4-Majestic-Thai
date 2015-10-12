var Menu = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    name: "",
    description: "",
    price: "",
    type: "",
  }
});

export default Menu;
