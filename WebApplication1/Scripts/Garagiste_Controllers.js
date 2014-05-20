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
//Controlleue de la page statistiques /////////////////////

Garagiste_Controllers.controller('Stats_Controller', [
    '$scope', '$http','$timeout','$interval', function($scope, $http,$timeout,$interval) {
        $timeout(function () {
            $scope.data = {
                series: [],
                data: []
            };
            $scope.temp={
                series: [],
                data: []
            };

             $scope.temp2={
                series: [],
                data: []
            };

            $scope.data2 = {
                series: [],
                data: []
            };



        }, 100);

        $scope.addData=function(data, temporary)
        {
        	if(data.series.length==0)
        	{

        	for (var i = temporary.data.length - 1; i >= 0; i--) {
        		data.data.push(temporary.data[i]);
        	}

        	for (var i = temporary.series.length - 1; i >= 0; i--) {
        		data.series.push(temporary.series[i]);
        	}
        	$scope.demarrer=1;
        	}
        	else
        	{

        	for (var k = temporary.data.length - 1; k >= 0; k--) {
        		data.data.push(temporary.data[k]);
        	};	

        	}

               	
        };

       

        $scope.recieveData=function()
        {
        

			$http.get('api/Garagiste').success(function(data){
        			for (var i = data.data.length - 1; i >= 0; i--) {
        		if (data.data[i]===null) {
        		data.data.splice(i,1);
        	}
        	        		$scope.temp=data;
        	}

        	});

        };


         $scope.recieveData2=function()
        {
        

			$http.get('api/Garagiste').success(function(data){
        			for (var i = data.data.length - 1; i >= 0; i--) {
        		if (data.data[i]===null) {
        		data.data.splice(i,1);
        	}
        	        		$scope.temp2=data;
        	}

        	});

        };





        $scope.reLoop=function()
        {
	        	setInterval(function(){
	        	$scope.recieveData();
	        	 $scope.addData($scope.data, $scope.temp);

	        	  $scope.recieveData2();
	        	  $scope.addData($scope.data2, $scope.temp2);

				alert('resultat1: ' + JSON.stringify($scope.data)  +"\n resultat2: "+ JSON.stringify($scope.data2));
				//alert("resultat1; "+ JSON.stringify($scope.data))
	        	}, 2000);
	        	
        };



       
        $scope.chartType = 'line';
        $scope.chartType2 = 'pie';

        $scope.config = {
            labels: true,
            title: "",
            legend: {
                display: true,
                position: 'left'
            },
            innerRadius: 0
        };

         $scope.config2 = {
            labels: true,
            title: "Graphe 2",
            legend: {
                display: true,
                position: 'left'
            },
            innerRadius: 0
        };



        
    }
]);
