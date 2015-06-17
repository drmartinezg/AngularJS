angular.module('directives', []).directive('nsStateful',
	function(){
		return {
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			scope: false, // {} = isolate, true = child, false/undefined = no change
			link: function(scope, element, attrs) {
				if (!attrs.nsStateful) {
					throw "You must provide a class name in order to use the nsStateful directive.";
				}

				element.bind('click', function(e) {
					scope.$apply(function() {
						if (!element.hasClass(attrs.nsStateful)) {
							element.addClass(attrs.nsStateful);
						} else {
							element.removeClass(attrs.nsStateful);
						}
					});
				});
			}
		}
	});