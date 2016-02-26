define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/projects.html'
], function($, _, Backbone, HtmlTemplate){

	var projects = [
		{name: 'PreventionWeb', deadline:'Yesterday'},
		{name: 'UNISDR', deadline:'Today'},
		{name: 'WCDRR', deadline:'Tomorrow'},
		{name: 'Global Platform', deadline:'Never'}
	];

  var ThisView = Backbone.View.extend({
    el: $("#page"),
	initialize: function() {
		this.template = _.template( HtmlTemplate );
	},
    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(this.template({projects}));
    }

  });

  return ThisView;
  
});
