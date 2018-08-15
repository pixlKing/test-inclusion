var app = angular.module("app", []);

app.controller("appController", function ($scope, $http) {

	//Carga inicial de datos de la api
	function api(){
		$http.get('/products').success(function (data) {
			$scope.products = data.products;
			console.log("Carga exitosa");
		});
	}
	api();

	//Refresh de la api
	$scope.refresh = function (){
		api();
	}

});

//Filtro de busqueda
app.filter('searchFor', function(){
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function(data){
            if(
            	data.Nombre.toLowerCase().indexOf(searchString) !== -1 ||
            	data.Apellido.toLowerCase().indexOf(searchString) !== -1 ||
            	data.DNI.indexOf(searchString) !== -1
            ){
	            result.push(data);
	        }
        });
        return result;
    };
});
