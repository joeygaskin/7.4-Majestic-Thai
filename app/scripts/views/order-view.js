import Order from 'models/order';
import MenuItemView from 'views/item-view';


var OrderView = Backbone.View.extend ({
  template: JST['order'],

  initialize: function(){
    this.listenTo(order, 'change', this.render);
  },

  render: function (){
    this.$el.html(this.template(this.present()));
    console.log("for the love of God please work");
    return this;
  },

  present: function(){
    return {
      order: order.get('order').map((i) => {
        return i.toJSON();
      })
    };
  }
});

export default OrderView;
