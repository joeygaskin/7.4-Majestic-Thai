import Post from 'models/post';

var PostsCollection = Backbone.Collection.extend({
  model: Post,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/posts"
});

export default PostsCollection;
