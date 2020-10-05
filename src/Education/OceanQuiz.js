import React from "react";
import Quiz from 'react-quiz-component';

const quiz =  {
    "quizTitle": "Our Oceans Quiz",
    "quizSynopsis": "Answer the quiz question to move on to the next section",
    "questions": [
      {
        "question": "How much of Earth's surface if covered with ocean water?",
        "questionType": "text",
        "questionPic": "./assets/nasaOcean.jpg", //  display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "60%",
          "90%",
          "70%",
          "75%"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Approximately 70% of Earth’s surface is covered by ocean water!",
        "point": "20"
      },
      {
        "question": "How long has NASA beein oberving Earth's ocean from space?",
        "questionType": "text",
        "questionPic": "./assets/nasaSpace.jpg",
        "answerSelectionType": "single",
        "answers": [
          "Since 1910",
          "Since 1816",
          "Since 1978",
          "Since 1988"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "NASA has been observing Earth’s ocean from space for more than 38 years, beginning with the launch of the first civilian oceanographic satellite, Seasat, on January 28, 1978.",
        "point": "20"
      },
    ]
  } 

  function OceanQuizContainer() {
    return <Quiz quiz={quiz}/>;
  }
  
  export default OceanQuizContainer;
  

