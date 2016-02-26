define([
  'jquery',
  'underscore',
  'backbone'
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
    el: $("#footer"),

    render: function(){
      this.$el.html('Footer');
    }

  });

  return ThisView;
  
});
