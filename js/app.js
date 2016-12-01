(function(){
	var app = angular.module('gemStore', ['store-products']);
	
	app.controller('StoreController', [ '$http', function($http){
		var store = this;
		store.products = [];
		$http.get('js/store-products.json').success(function(data){
			store.products = data;
		});
	}]);
	
	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product){
		  this.review.createdOn = Date.now();
		  product.reviews.push(this.review);
		  this.review = {};
		};
	});
	
	app.directive("navbar", function(){
		return{
			restrict: "E",
			templateUrl: "navbar.html"
		};
	});
	
	app.directive("foot", function(){
	  return{
			restrict: "E",
			templateUrl: "footer.html"
	  };  
	});
		
})();