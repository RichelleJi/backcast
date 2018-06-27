var AppView = Backbone.View.extend({

  el: '#app',
  

  initialize: function() {
    // console.log('early el', this.el);
    // this.videos = new Videos();
    this.render();
    this.renderVideoPlayView();
    this.renderVideoListView();
    this.listenTo(this.model, 'sync',this.renderVideoListView);

  },

  // events: {
  //   'sync': 'this.renderVideoListView'
  // },

  render: function() {
    this.$el.html(this.template());
    // console.log('appjs template:', this.template())
    console.log(this);
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
    // console.log('this.el', this.el, '$el', this.$el, 'el', el);
    // console.log('2:33 :', this.el);
  },


  template: templateURL('src/templates/app.html')

});
