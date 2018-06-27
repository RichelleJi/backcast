var VideoListView = Backbone.View.extend({

  // initialize: function() {
  //   this.render();
  // },
  // el: '.list',
  
  render: function() {
    // console.log('inside videolistView - model: ', this.model);
    // console.log('this.$el ', this.$el);
    this.$el.children().detach();
    // console.log('this.$el.children() after detach ', this.$el.children());
    this.$el.html(this.template());
    // console.log('template: ', this.template());
    for (var i = 0; i < this.collection.models.length; i++) {
      this.renderEachVid(this.collection.models[i]);
    }
    
    // console.log(this.collection.models);
    // console.log(this.renderEachVid(this.collection[0]));
    // return this.collection.forEach(this.renderEachVid, this); // console.log('this    ', this);
    // console.log('collection for each: ', this.collection.forEach(this.renderEachVid, this));
    // console.log(this.models);
    console.log('the this ', this);
    // return this;
    
  },

  template: templateURL('src/templates/videoList.html'),

  renderEachVid: function(video) {
    var videoListEntry = new  VideoListEntryView({model: video});
    // console.log('videoListEntry ', videoListEntry);
    // console.log('this ', this, 'el', el, 'this.el', this.el, 'this.$el', this.$el);
    this.$el.children().append(videoListEntry.render());
    // console.log('VideoListView $el ', this.$el);
  },

});

