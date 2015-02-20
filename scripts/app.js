var app = angular.module('qualtrics', ['ngRoute']);

//Here we configure our router to match all the different paths we need in our app.
app.config(function($routeProvider){
  //we inject the $routeProvider into our config function.
  //We then define a route by using $routeProvider.when
  //We give that .when function two parameters.
  //1) the name of the path/hash 
  //2) We give it which template and which controller to use for that path
  $routeProvider.when('/',
    {
      templateUrl: '/scripts/home/home.html',
      controller: 'homeCtrl'
    })
  //Here we use a route parameter.
  //This is a variable we can use in our app by accessing it with the
  //$routeParams service. =)
  .when('/quiz/:id',
    {
      templateUrl: '/scripts/quiz/quiz.html',
      controller: 'quizCtrl'
    })
})
