// Filename: router.js


define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/projects/ProjectsView',
  'views/about/AboutView',
  'views/footer/FooterView'
], function($, _, Backbone, HomeView, ProjectsView, AboutView, FooterView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'projects': 'showProjects',
      'about': 'showAbout',

      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;

    app_router.on('route:showProjects', function(){
        var projectsView = new ProjectsView();
        projectsView.render();

    });

    app_router.on('route:showAbout', function () {
        var aboutView = new AboutView();
		aboutView.render();
    });

	app_router.on('route:defaultAction', function (actions) {
	  // No matching route, display the home page 
	  var homeView = new HomeView();
	  homeView.render();
	});

	// Render footer
	var footerView = new FooterView().render();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});