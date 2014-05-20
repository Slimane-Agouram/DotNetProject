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
                series: [],
                data: []
            };
        }, 100);

        $scope.addData=function(fromWeb)
        {
        	for (var i = $scope.temp.data.length - 1; i >= 0; i--) {
        		$scope.data.data.push($scope.temp.data[i]);
        	};

        	for (var i = $scope.temp.series.length - 1; i >= 0; i--) {
        		$scope.data.series.push($scope.temp.series[i]);
        	};


        
        	
        };

        $scope.recieveData=function()
        {
        	var resultat = [];
        	$http.get('api/Garagiste').success(function(data){
        			for (var i = data.data.length - 1; i >= 0; i--) {
        		if (data.data[i]===null) {
        		data.data.splice(i,1);
        	};

        	};
        	 alert(JSON.stringify(data));


        		$scope.temp=data;
				// alert(JSON.stringify($scope.data));


        	});

        };


        $scope.reLoop=function()
        {
	        	setInterval(function(){$scope.recieveData();
	        	 $scope.addData($scope.data);

	        		// alert(JSON.stringify($scope.data.series));
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
