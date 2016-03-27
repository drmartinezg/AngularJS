angular.module('directives').directive('nsTextAndSub', 
	function(){
		return {
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			templateUrl: 'app/directives/text-and-sub.html',
			scope: {
				text: "@",
				sub: "@"
			},
			link: function(scope, element, attrs) {
			}
		};
	});

