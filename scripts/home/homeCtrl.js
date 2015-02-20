angular.module('qualtrics').controller('homeCtrl', function($scope, quizService, $location){
  
  //Here we load all the quizes for our app.
  $scope.quizes = quizService.getQuizes();

  //This code we used before we made our directive.
  //Note, it might be better to define the navigation logic here.
  //And pass in this function to our directives via an '&' in an isolate scope.
  /*$scope.toQuiz = function(quiz){
    $location.path('/quiz/' + quiz.id);
  }*/

});
