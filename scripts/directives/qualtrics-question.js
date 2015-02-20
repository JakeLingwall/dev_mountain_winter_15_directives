angular.module('qualtrics').directive('qualtricsQuestion', function(){
  return {
    //This time we restrict our directive to 'E' meaning for Element.
    //I reccomend using this tag when you need an isolate scope
    //As elements can only have 1 isolate scope.
    //Also, it's good to use E for components, or re-usable visual components in your app.
    //A is great for functionality only directives like our other ones.
    //Essentially, most the time if you need a template, you need to use E and isolate scope
    restrict: 'E',
    //Here we declare an isolate scope.
    //We define that our scope will have a parameter called "question"
    //Our new scope will receive the scope.quesiton value from it's parent scope by reference.
    //This means it shares the same object as the parent scope.
    //be careful with this.
    //If you don't want to share by reference
    //Share by value instead by using "@" instead of "="
    scope: {question: "="},
    //give it hte full path to our template file/
    templateUrl: "/scripts/directives/qualtrics-question.html",
    link: function($scope, $elem, $attrs){
    
      $scope.answerQuestion = function(option){
        //we wrote this in a hurry. This.question refers to the scope from our ng-repeat.
        //don't stress about this. We wrote it in a hurry yo.
        this.question.answer = option.key; 
      }
    }
  }
});
