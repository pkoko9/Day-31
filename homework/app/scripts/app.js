angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: "/home",
		templateUrl: "templates/home.html",
		controller: "homeCtrl"
	})
	.state('settings', {
		url: "/settings",
		templateUrl: "templates/settings.html",
		controller: "settingsCtrl"
	})
	.state('play', {
		url: "/play",
		templateUrl: "templates/play.html",
		controller: "playCtrl"
	})

	.state('leaderboard', {
		url: "/leaderboard",
		templateUrl: "templates/leaderboard.html",
		controller: "leaderboardCtrl"
	});

	$urlRouterProvider.otherwise("/home");
});
