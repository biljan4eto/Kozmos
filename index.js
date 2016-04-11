var kozmos = angular.module('kozmos', ['ngRoute', 'kozmos.home', 'kozmos.article', 'kozmos.about']);

kozmos.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
           templateUrl: './views/home/home.html',
           controller: 'homeCtrl' 
        }).
        when('/article/:articleId', {
           templateUrl: './views/article/article.html',
           controller: 'articleCtrl' 
        }).
        when('/about', {
           templateUrl: './views/about/about.html',
           controller: 'aboutCtrl' 
        }).
        otherwise({
           redirectTo: '/' 
        });
}]);

kozmos.factory('appSettings', [function() {
    return {
        "baseUrl": "http://localhost/"  
    };
}]);

kozmos.factory('getArticles', ['$http', function($http) {
    return function() {
        return $http({
            method: 'GET',
            url: 'http://localhost/app_data/articles.json?' + new Date().getTime()
        });
    };
}]);

kozmos.factory('getArticle', ['$http', function($http) {
    return function(articleId) {
        return $http({
            method: 'GET',
            url: 'http://localhost/app_data/articles/' + articleId + '/article.json?' + new Date().getTime()
        });
    };
}]);