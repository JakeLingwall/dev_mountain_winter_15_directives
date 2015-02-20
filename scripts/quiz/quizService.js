//We use a factory here to act as our service.
angular.module('qualtrics').factory('quizService', function(){


  //factories return an object, so we define that object here with all the methods we need.
  var api = {
    getQuizes: getQuizes,
    getQuiz: getQuiz
  };

  var quizes = [
    {
      id: 0,
      name: "What Disney Pricess am I?",
      questions: [
        {
          title: "Are both your parents alive?",
          options: [
            {
              key: "A",
              value: "Yes!"
            },
            {
              key: "B",
              value: "No!"
            } 
          ]
        },
        {
          title: "Can you talk to animals?",
          options: [
            {
              key: 'A',
              value: 'Yes, all of them!'
            },  
            {
              key: 'B',
              value: 'Yes, but only birds'
            },
            {
              key: 'C',
              value: 'No, I am not insance'
            }
          ]
        }
      ]
    },
  ];

  function getQuizes(){
    return [
      {name: 'What disney Princess am I?', id: 0},
      {name: 'How long would you surive an Zombie Acpocalypse', id:1}
    ]
  }

  function getQuiz(id){
    return quizes[id];
  }
  //Now we return out that api object to whoever is asking for it.
  return api;
})
