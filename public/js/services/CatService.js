angular.module('CatService', []).factory('Cat', ['$http', function($http){
    return {
      get: function(){
        return $http.get('/api/nerds');
      },
      create: function(catData){
        //PLACE HOLDER, NO ROUTE
        return $http.post('/api/cats', catData);
      },
      delete : function(id){
        //PLACE HOLDER, NO ROUTE
        return $http.delete('/api/nerds/' + id);
      }
    }
}]);
