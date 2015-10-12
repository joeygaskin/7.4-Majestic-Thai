import MenuCollection from 'models/menu-collection';
import order from 'models/order';

var MenuItemView = Backbone.View.extend ({
  tagName: 'li',
  template: JST['menu'],

  events: {
    'click .place-your-order': 'placeOrder',
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  placeOrder: function(e){
    e.preventDefault();
    order.addOrder(this.model);
    console.log(order);

  }

});

export default MenuItemView;
