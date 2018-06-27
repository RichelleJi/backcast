var VideoListEntryView = Backbone.View.extend({

  // initialize: function() {
  //   //this.render();
  // },
  // initialize: function() {
  //   this.on('click', renderVideoPlayView)
  // }
  
  events: {
    'click': 'click',
  },
  
  click: function(e) {
    console.log(e);
    // link, name, desc
    //currentTarget.innerText
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));//com back to thumbnail

    return this.el;
    // console.log('$el', this.$el)
    // console.log('el', this.el)
  },

  template: templateURL('src/templates/videoListEntry.html')

});


// figure out if rendering is okay?