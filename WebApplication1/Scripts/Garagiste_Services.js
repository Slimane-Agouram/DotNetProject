var Garagiste_Services = angular.module('Garagiste_Services', ['ngResource']);
Garagiste_Services.factory('Garagiste', [
    '$resource',
    function($resource) {
        return $resource('api/Garagiste', {}, {
            query: { method: 'POST', params: {}, isArray: true }
        });
    }
]);

var Voiture_Services = angular.module('Voiture_Services', ['ngResource']);
Voiture_Services.factory('Voiture', [
    '$resource', function ($resource) {
        return $resource('api/Voiture', {}, {
            query: { method: 'POST', params: {}, isArray: true }
        });

    }
]);
