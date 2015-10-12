import PostsCreateView from 'views/posts/create';

var PostsIndexView = Backbone.View.extend({
  template: JST['posts/index'],
  className: 'row',

  events: {
    'click .js-toggle-create': 'toggleCreate'
  },

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  },

  toggleCreate: function(){
    if(this.createView) {
      this.createView.remove();
      delete this.createView;
    } else {
      this.createView = new PostsCreateView();
      this.$('.posts-create-container').append(this.createView.render().el);
    }
  }
});

export default PostsIndexView;
