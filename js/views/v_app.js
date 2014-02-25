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

			var obj, $obj, delayAcumulado = 1;

			this.render();

			this.objs = [
				{ name: 'home_bkg',			delay: 0,	fx: 'slideDown' },
				{ name: 'home_bkg_up',		delay: .5,	fx: 'slideRight' },
				{ name: 'home_bkg_down',	delay: .5,	fx: 'slideLeft' },
				{ name: 'txt_gana',			delay: .5 },
				{ name: 'form',				delay: .1 },
				{ name: 'label321',			delay: .1 },
				{ name: 'btn_comprobar',	delay: .1 },
				{ name: 'btn_sin',			delay: .1 },
				{ name: 'mm',				delay: .1 },
				{ name: 'btn_premios',		delay: .1 },
				{ name: 'btn_info',			delay: .1 },
				{ name: 'btn_bases_legales',delay: .1 },
				{ name: 'logo',				delay: 0 }
			];

			for( var i in this.objs ){
				obj = this.objs[i];

				//GUARDO EL DELAY ACUMULADO POR TODOS LOS ELEMENTOS
				delayAcumulado += obj.delay;

				$obj = $('.' + obj.name);

				// POR DEFECTO EFECTO ALPHA
				if( typeof obj.fx == 'undefined') obj.fx = 'alpha';

				// ANIMO SEGÚN EL EFECTO DE CADA ELEMENTO
				switch(obj.fx){
					case 'alpha':
						$obj.css('opacity', 0)
							.delay( delayAcumulado*1000 )
							.animate({opacity: '1'}, 500);
						break;
					case 'slideDown':
						//http://jqueryui.com/show
						//show( selectedEffect, options, time, callback )
						$obj.hide(1)
							.delay( delayAcumulado*1000 )
							.show('blind', { direction: 'down' }, 500);
						break;
					case 'slideUp':
						//http://jqueryui.com/show
						//show( selectedEffect, options, time, callback )
						$obj.hide(1)
							.delay( delayAcumulado*1000 )
							.show('blind', { direction: 'up' }, 500);
						break;
					case 'slideLeft':
						//http://jqueryui.com/show
						//show( selectedEffect, options, time, callback )
						$obj.hide(1)
							.delay( delayAcumulado*1000 )
							.show('blind', { direction: 'left' }, 500);
						break;
					case 'slideRight':
						//http://jqueryui.com/show
						//show( selectedEffect, options, time, callback )
						$obj.hide(1)
							.delay( delayAcumulado*1000 )
							.show('blind', { direction: 'right' }, 500);
						break;
				}
				
			}

		
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
