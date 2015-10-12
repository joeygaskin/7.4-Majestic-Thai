var CreatePostView = Backbone.View.extend({
  tagName: 'form',
  template: JST['posts/create'],

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

export default CreatePostView;
