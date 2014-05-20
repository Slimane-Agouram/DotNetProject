var Garagiste_Controllers = angular.module('Garagiste_Controllers', ['angularCharts']);
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
            if ($scope.nombreVoiture == "" || $scope.marqueVoiture.name =="choisir une marque") {

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

Garagiste_Controllers.controller('Stats_Controller', [
    '$scope', '$http','$timeout','$interval', function($scope, $http,$timeout,$interval) {
        $timeout(function () {
        	$scope.data=[];
            $scope.data = {
                series: ['Sales', 'Income', 'Expense' ],
                data: [{
                    x: "Sales",
                    y: [100, 500, 0],
                    tooltip: "this is tooltip"
                },
                {
                    x: "Not Sales",
                    y: [300, 100, 100]
                },
                {
                    x: "Tax",
                    y: [351]
                },
                {
                    x: "Not Tax",
                    y: [54, 0, 879]
                }]
            };
        }, 100);

        $scope.addData=function(fromWeb)
        {
        	for (var i = fromWeb.data.length - 1; i >= 0; i--) {
        		$scope.data.data.push(fromWeb.data[i]);
        	};
        	
        };

        $scope.recieveData=function()
        {
        	var resultat = [];
        	$http.get('api/Garagiste').success(function(data){
        		$scope.data=data;

        		//alert(JSON.stringify(data));
        	});

        };

        // function recieveData()
        // {
        // 	var resultat = [];
        // 	$http.get('api/Garagiste').success(function(data){
        // 		$scope.data=data;
        // 	});
        // }

        // function addData(fromWeb)
        // {
        // 	for (var i = fromWeb.data.length - 1; i >= 0; i--) {
        // 		$scope.data.data.push(fromWeb.data[i]);
        // 	};
        	
        // }

        $scope.reLoop=function()
        {
	        	setInterval(function(){$scope.recieveData(); $scope.addData($scope.data);

	        		alert(JSON.stringify($scope.data));
	        	}, 1000);
	        	
        };



       
        $scope.chartType = 'line';

        $scope.config = {
            labels: false,
            title: "Not Products",
            legend: {
                display: true,
                position: 'left'
            },
            innerRadius: 0
        };

        
    }
]);
