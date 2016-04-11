var article = angular.module('kozmos.article', []);

home.controller('articleCtrl', ['$scope', '$routeParams', '$location', 'getArticle',
function($scope, $routeParams, $location, getArticle) {
    getArticle($routeParams.articleId).then(function(response) {
        $scope.article = response.data;
    }, function(response) {
        $location.path('/');
    });
}]);