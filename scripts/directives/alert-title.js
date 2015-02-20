//Here we make another directive called alertTitle
angular.module('qualtrics').directive('alertTitle', function(){
  //here we return our directive defintion object
  return {
    //first thing we return is "restrict" which tells angular where to look
    //for your directive. Here we use 'A', for Attribute
    restrict: 'A',
    //Because we are using an Attribute, and don't have an isolate scope
    //We don't define one. We also don't need a template, because we won't
    //be able to visually see this directive.
    //
    //The last thing we declare in this object is the link: function()
    //This is where we handle logic and code for the directive
    //This function gets three parameters IN THIS ORDER
    //scope, elem, attrs.
    link: function($scope, $elem, $attrs){
      //Here we access the $elem which is the dom element where the directive was defined.
      //We bind the 'mouseover' event to the element. And then alert when it gets triggered.
      $elem.bind('mouseover', function(){
        alert($elem.text());
      }) 
    }
  }
});
