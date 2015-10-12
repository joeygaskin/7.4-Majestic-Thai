import MenuItemView from 'views/item-view';

var MenuView = Backbone.View.extend({
  tagName: 'ul',
  className: "menu-view",

  initialize: function (){
    this.listenTo(this.collection, 'add remove', this.render);
  },

  render: function(){
    var self = this;
    this.$el.html('');
    this.collection.each(function(menu) {
      var food = new MenuItemView({model: menu});
      self.$el.append(food.render().el);
    });
    return this;
  }

});

export default MenuView;
