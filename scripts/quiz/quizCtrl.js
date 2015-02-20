//we inject $routeParams because we want to pull the :id variable value from the path;
angular.module('qualtrics').controller('quizCtrl', function($scope, $routeParams, quizService){

  //Here we go get the quiz from our quiz service, based on the route;
  $scope.quiz = quizService.getQuiz($routeParams.id);

  //This isn't the right way to solve this problem.
  //we wrote this because we were in a hurry.
  //Write better code.
  //But we are using a "watch" fuction in Angular.
  //This will execute your passed in function everytime a value changes on your scope
  $scope.$watch('quiz', function(newVal, oldVal){
    if(newVal && oldVal){
      //we make sure the newVal and the oldVal exist.
      var finished = true;
      //Here we loop through the quiz questions to make sure they are all answered
      $scope.quiz.questions.forEach(function(question){
        if(!question.answer){
          finished = false;
        }
      })
      if(finished){
        alert("congrats you are a Belle");
      }
    }
  }, true)

});
