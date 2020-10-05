import React from "react";
import Quiz from 'react-quiz-component';

const quiz =  {
    "quizTitle": "Ozone Quiz",
    "quizSynopsis": "Answer the quiz question to move on to the next section",
    "questions": [
      {
        "question": "Why is the Ozone layer important?",
        "questionType": "text",
        "questionPic": "./assets/reflectedLightDog.jpg", //  display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "It protects Earth from alien invasions",
          "It protects Earth from ultraviolet (UV) radiation"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "The ozone layer is important because it protects the Earth from harmful levels of ultraviolet (UV) radiation which increases the rate of skin cancer, eye cataracts, and genetic and immune system damage.",
        "point": "20"
      }
    ]
  } 

  function OzoneQuizContainer() {
    return <Quiz quiz={quiz}/>;
  }
  
  export default OzoneQuizContainer;
  

