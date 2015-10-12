var PostsShowView = Backbone.View.extend({
  template: JST['posts/show'],

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default PostsShowView;
