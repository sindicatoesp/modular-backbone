define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/about.html'
], function($, _, Backbone, HtmlTemplate){

	// https://cdnjs.com/libraries/backbone.js/tutorials/what-is-a-model
	var Person = Backbone.Model.extend({
		defaults: {
			name: 'Guest Worker',
			age: 'Unknown',
			occupation: 'Worker'
		}
	});
	var person = new Person();

  var ThisView = Backbone.View.extend({
    el: $("#page"),
	initialize: function() {
	  this.template = _.template( HtmlTemplate );
	},
    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(this.template(person.toJSON()));
    }

  });

  return ThisView;
  
});
