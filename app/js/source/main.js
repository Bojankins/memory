(function(){

	'use strict';

	$(document).ready(init);

	function init(){
			$('#load').click(load);
		}

		var random = [];


		function load(){
			getrandom();
			var $random = $('tbody > tr > img');
			for(var i = 0; i < 20; i++){
				$random [i].attr('src', './media/' + random[i] + '.jpg');
			}
		}

		function getrandom(){
				for(var i = 0; i < 20; i++){
					random.push(i);
				}

				random.sort(function() {
					return 0.5 - Math.random();
					});
			}




})();