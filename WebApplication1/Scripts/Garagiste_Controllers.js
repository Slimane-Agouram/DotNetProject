var Garagiste_Controllers = angular.module('Garagiste_Controllers', []);
Garagiste_Controllers.controller('Ajout_Garagiste_Controller', ['$scope','$http', 'Garagiste','Voiture', function($scope,$http, Garagiste, Voiture) {
        
        $scope.garagistes = [];
        $scope.count = 0;
        $scope.voitures = [];
        $scope.franchises = [
        { name: "Fiat" }, { name:"Renault" }, { name:"Mercedez" }, { name:"Bentley" }
        ];
        $scope.models = [{ name: "sl50" }, { name: "ml500" }, { name: "for real 300" }];
        //initialisation:
        $scope.item_Nombre = "";
        //$scope.item_Franchise = "";

        $scope.AddGaragiste = function() {
            if ($scope.item_Nombre == "" || $scope.item_Franchise.name == "choisir une franchise" || $scope.item_Nombre.$invalid) {
               
                alert("Erreur formulaire - Entrez les données demandées!");

            } else {
                $scope.garagistes.push({
                    nombre: $scope.item_Nombre,
                    franchise: $scope.item_Franchise.name

                });
                $scope.item_Nombre = "";
                //$scope.item_Franchise = "choisir une franchise";
            }

        };


        $scope.AddVoiture = function () {
            if ($scope.nombreVoiture == "" || $scope.marqueVoiture.name == "choisir une marque" || $scope.nombreVoiture.$invalid) {

                alert("Erreur formulaire - Entrez les données demandées!");

            } else {
                $scope.voitures.push({
                    nombre: $scope.nombreVoiture,
                    voiture: $scope.marqueVoiture.name

                });
                $scope.nombreVoiture = "";
                //$scope.item_Franchise = "choisir une franchise";
            }

        };

        $scope.ExecuteLancer= function() {

            var resultat = {
                lgaragistes: $scope.garagistes,
                lvoitures: $scope.voitures,
                duration: $scope.duration,
                dateDebut: $scope.dateDebut
            };
           

            $http.post('api/Garagiste', JSON.stringify(resultat));
        };
        $scope.deleteItem = function(array, index) {
            array.splice(index, 1);
        };

    }
]);
