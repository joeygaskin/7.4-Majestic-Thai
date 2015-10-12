import MenuCollection from 'models/menu-collection';
import MenuView from 'views/menu-view';
import OrderView from 'views/order-view';


  $(document).ready(function(){
  $('#container').append(JST.application());

      var menuCollection = new MenuCollection();

      var menuView = new MenuView({collection: menuCollection});
      $('.menu-container').html(menuView.render().el);
      menuCollection.fetch();

      var orderView = new OrderView();
      $('.order-container').html(orderView.render().el);


 });
