import React from "react";
import Quiz from 'react-quiz-component';

const quiz =  {
    "quizTitle": "The Icy Arctic Quiz",
    "quizSynopsis": "Answer the quiz question to move on to the next section",
    "questions": [
      {
        "question": "What is the proportion of reflected light from Earth's surface called?",
        "questionType": "text",
        "questionPic": "./assets/reflectedLight.jpg", //  display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "X-Rays",
          "Ultraviolet light",
          "Alfonso",
          "Albedo"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "The proportion of reflected light from the Earth’s surface is called albedo.",
        "point": "20"
      },
      {
        "question": "FILL IN THE BLANK: The Arctic is one of the _______ regions on Earth.",
        "questionType": "text",
        "questionPic": "./assets/arcticFox.jpg",
        "answerSelectionType": "single",
        "answers": [
          "coldest",
          "hottest",
          "greenest"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "The Arctic is one of the coldest regions on Earth! ",
        "point": "20"
      },
    ]
  } 

  function ArcticQuizContainer() {
    return <Quiz quiz={quiz}/>;
  }
  
  export default ArcticQuizContainer;
  

