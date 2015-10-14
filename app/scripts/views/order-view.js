import Order from 'models/order';
import MenuItemView from 'views/item-view';


var OrderView = Backbone.View.extend ({
  template: JST['order'],

  initialize: function() {

    this.listenTo(order, 'change remove', this.render);
  },


  render: function(){

    this.$el.html(this.template(this.present()));
    return this;

  },

  present: function(){
    return {
      orders: order.get('orders').map((p)=>{
        return p.toJSON();
      }),
      subtotal: order.get('orders').reduce(function(total, current) {
        return total + Number(current.get('price'));
      }, 0) / 1000 + ""
    };
  }


   });
export default OrderView;
