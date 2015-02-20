angular.module('qualtrics').directive('quizLink', function($location){
  return {
    //another restrict E for element directive
    restrict: 'E',
    //here we pass data to our scope by reference --> "="
    //This declares an isolate scope.
    //We can pass in as many things as we want here.
    //Use the "&" value to pass in a callback function
    scope: {data: "="},
    templateUrl: '/scripts/directives/quiz-link.html',
    link: function($scope, $elem, $attrs){
         
      $scope.toQuiz = function(){
        $location.path('/quiz/' + $scope.data.id);
      }
    }
  }
});
