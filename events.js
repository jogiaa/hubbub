//events.js
//introduction to back bone events


//binding change event on a model
		indiEvent = function(){

			var localModel = new Backbone.Model();
			localModel.on('change' , function(){
				console.log('model changed');
			});

			localModel.set('name', 'Gunner'); // "time to save the model!" 
		};
indiEvent();