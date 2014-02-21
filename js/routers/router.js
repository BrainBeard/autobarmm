/*global define*/
define([
	'jquery',
	'backbone'
], function ($, Backbone) {
	'use strict';

	var Router = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},

		setFilter: function (param) {
			console.log('router.js - setFilter', param);
			//Todos.trigger('filter');
		}
	});

	return Router;
});
