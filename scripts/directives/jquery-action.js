angular.module('qualtrics').directive('jqueryAction', function(){
  //Here we create and return our directive definition object
  return {
    //We restrict the directive to be only Attributes
    restrict: 'A', 
    //Once again we don't need an isolate scope or template so 
    //we jump to our link function.
    link: function($scope, $elem, $attrs){

      //Some sweet random Hex value code we found on github.
      function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      
      //When the element, where the directive was declared in HTML
      //is clicked we use Jquery to change teh background color of our app.
      //We also put a transition on there because the kids love it.
      $elem.bind('click', function(){
        $('body').css('background-color', getRandomColor() ); 
      }); 


    }
  }
});
