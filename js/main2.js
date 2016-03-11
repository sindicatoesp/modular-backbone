// Filename: main2.js

// Require.js allows us to configure shortcut alias
var margateConfig = require.config({
	baseUrl: 'js',
	paths: {
		jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.1/jquery.min',
		underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
		backbone: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min',
		text: 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min'
	},
		shim: {
			// Backbone
			backbone: {
				 // Depends on underscore/lodash and jQuery
				 deps: ["underscore", "jquery"],
				 // Exports the global window.Backbone object
				 exports: "Backbone"
			}
	    }
});


margateConfig([
  // Load our app module and pass it to our definition function
  'require', 'app2',
], function(require, App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});