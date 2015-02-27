(function (document) {
	'use strict';

	document.addEventListener('polymer-ready', function() {
		var ajaxProjects = document.getElementById('ajaxProjects');
		ajaxProjects.addEventListener('core-response', 
			function(e) {
				document.querySelector('template').model.projects = e.detail.response;
			}
		);

		var ajaxPeople = document.getElementById('ajaxPeople');
		ajaxPeople.addEventListener('core-response', 
			function(e) {
				document.querySelector('template').model.people = e.detail.response;
			}
		);
	});
})(wrap(document));
