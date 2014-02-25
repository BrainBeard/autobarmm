/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		jqueryui: {
			deps: ['jquery']
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jqueryui'
			],
			exports: 'Backbone'
		},
		backboneLocalstorage: {
			deps: ['backbone'],
			exports: 'Store'
		}
	},
	paths: {
		backbone: 				'../bower_components/backbone/backbone',
		backboneLocalstorage: 	'../bower_components/backbone.localStorage/backbone.localStorage',
		bootstrap: 				'../bower_components/bootstrap/bootstrap.min',
		jquery: 				'../bower_components/jquery/jquery',
		jqueryui: 				'../bower_components/jquery/jquery-ui',
		modernizr: 				'../bower_components/modernizr/modernizr.min',
		underscore: 			'../bower_components/underscore/underscore',
		text: 					'../bower_components/requirejs-text/text'
	}
});

require([
	'backbone',
	'views/v_app',
	'routers/router'
], function (Backbone, View_app, Workspace) {

	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()
	new Workspace();

	Backbone.history.start();

	// Initialize the application view
	new View_app();
});
