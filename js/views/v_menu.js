/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/menu.html'
], function ($, _, Backbone, tpl) {
	'use strict';

	// View_app es el UI principal
	var View = Backbone.View.extend({

		// Elemento del HTML que gestiona este View
		el: '#menu',

		// Underscore recoge la template app
		template: _.template( tpl ),

		// Eventos de la plantilla app
		events: {
			'click #btn0':	'onBtn0',
			'click #btn1':	'onBtn1',
			'click #btn2':	'onBtn2'
		},

		// Método Constructor
		initialize: function () {
			this.$botones = this.$('.btn');
			this.$btn0 = this.$('.btn')[0];
			this.$btn1 = this.$('#btn1');
			this.$btn2 = this.$botones[0];

			this.listenTo(Collection_menu, 'add', this.addOne);
			this.listenTo(Collection_menu, 'reset', this.addAll);

			/*
			// AGREGO EVENTOS A LA COLECCIÓN

			this.listenTo(Collection_menu, 'change:completed', this.filterOne);
			this.listenTo(Collection_menu, 'filter', this.filterAll);
			this.listenTo(Collection_menu, 'all', this.render);
			*/

			// RECOJO LA COLECCIÓN
			//Collection_menu.fetch();
		},

		// Render de view 
		render: function () {

			this.$el.html(this.template({
				globals: globals
			}));

		},

	});

	return View;
});
