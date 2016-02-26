define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home.html'
], function($, _, Backbone, HtmlTemplate){

  var ThisView = Backbone.View.extend({
    el: $("#page"),
	initialize: function() {
		this.template = _.template( HtmlTemplate );
	},
    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(this.template({label_header1:'What is Lorem Ipsum?', label_header2:'Why do we use it?'}));
    }

  });

  return ThisView;
  
});
