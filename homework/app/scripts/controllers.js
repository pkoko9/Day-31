angular.module('app.controllers', [])
	
	.controller('homeCtrl', function($scope, $state) {
		$scope.test = 'hello';
	})
	
	.controller('playCtrl', function($scope, $state) {
		$scope.test = 'hello';
		$scope.goHome = function() {
			console.log('goHome');
			$state.go('home');
		}
	})
	
	.controller('settingsCtrl', function($scope, $state) {
		$scope.test = 'hello';
	})

	
	.controller('leaderboardCtrl', function($scope, $state) {
		$scope.test = 'hello';

});

