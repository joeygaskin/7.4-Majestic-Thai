var Post = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: "",
    body: ""
  }
});

export default Post;
