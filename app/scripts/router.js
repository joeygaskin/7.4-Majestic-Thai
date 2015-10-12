import PostsCollection from 'models/posts-collection';
import PostsIndexView from 'views/posts/index';
import PostsShowView from 'views/posts/show';

var AppRouter = Backbone.Router.extend({
  routes: {
    'posts': 'postsIndex',
    'posts/:id': 'postsShow'
  },

  initialize: function() {
    $('body').prepend(JST.application());
    this.postsCollection = new PostsCollection();
  },

  postsIndex: function() {
    console.log('route:index');
    var view = new PostsIndexView({collection: this.postsCollection});
    this.showView(view);
    this.postsCollection.fetch();
  },

  postsShow: function(id) {
    console.log('route:show:' + id);
    this.postsCollection.fetch().then((posts) => {
      var post = this.postsCollection.get(id);
      var view = new PostsShowView({model: post});
      this.showView(view);
    });
  },

  /*
   * Helper functions
   */

  showView: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#container').html(view.render().el);
    return view;
  },
});

export default AppRouter;
