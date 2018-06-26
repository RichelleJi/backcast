var AppView = Backbone.View.extend({

  el: '#app',
  

  initialize: function() {
    this.videos = new Videos();
    this.render();
    this.renderVideoPlayView();
    this.renderVideoListView();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  renderVideoPlayView: function() {
    var videoPlayview = new VideoPlayerView({
      el: this.$('.player'),
      collection: this.collection,
    }).render();
  },
  
  renderVideoListView: function() {
   new VideoListView({
     el: this.$('.list'),
     collection: this.collection,
   }).render();

  },


  template: templateURL('src/templates/app.html')

});
