//test/gen.js

window.jQuery(function(){
	module('gen');

	test('length of an array',function(){
		var mylist = [1,2,3,4,5];

		equal(mylist.length,5,'expected lenght');
	});


	test("slice", 2, function() {
  		var col = new
		Backbone.Collection([{a: 'a'}, {b: 'b'}, {c: 'c'}]);
  		var array = col.slice(1, 3);
  		equal(array.length, 2);
  		equal(array[0].get('b'), 'b');
	}); 
});


