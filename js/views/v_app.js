/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'collections/c_menu',
	'views/v_menu',
	'text!templates/app.html'
], function ($, _, Backbone, Collection_menu, View_menu, tpl_app) {
	'use strict';

	// View_app es el UI principal
	var View_app = Backbone.View.extend({

		// Elemento del HTML que gestiona este View
		el: '#dom_app',

		// Underscore recoge la template app
		template: _.template(tpl_app),

		// Eventos de la plantilla app
		events: {
			'click #btn0':	'onBtn0',
			'click #btn1':	'onBtn1',
			'click #btn2':	'onBtn2'
		},

		// Método Constructor
		initialize: function () {


			this.render();

			
			/*
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

			this.$el.html( this.template({

				titulos: ["Mi título feliz 1", "Otro más", "El tercero" ]
				//globals: globals
			}) );

		},

		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function ( m ) {
			var view = new View_menu( { model: m } );
			$('#menu').append( view.render().el );
		},

		// Add all items in the **Todos** collection at once.
		addAll: function () {
			this.$('#menu').html('');
			Collection_menu.each(this.addOne, this);
		}/*,

		filterOne: function (todo) {
			todo.trigger('visible');
		},

		filterAll: function () {
			Todos.each(this.filterOne, this);
		}*/
	});

	return View_app;
});
