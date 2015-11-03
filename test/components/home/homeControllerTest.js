var app = require('../../../app');
var should = require('chai').should();

describe('homeControllerTest', function () {

    beforeEach(angular.mock.module(app));
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(inject(function ($rootScope, _$state_, _$controller_) {
        $scope = $rootScope.$new();
        $state = _$state_.get('home');

        $controller = _$controller_('HomeController', {
            $scope: $scope,
            $state: $state
        });

    }));

    it("should have a scope variable defined", function () {
        should.exist($scope);
    });

    it("should have a title object defined", function () {
        $scope.title.should.to.be.an('string');
    });

});
