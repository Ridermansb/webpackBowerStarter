var HomeController = function ($scope) {

    $scope.title ='from controller';

    return $scope;

};

HomeController.$inject = ['$scope'];
module.exports = HomeController;
