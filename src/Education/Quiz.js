import React from "react";
import Quiz from 'react-quiz-component';

const quiz =  {
    "quizTitle": "Biodiversity Quiz",
    "quizSynopsis": "Answer the quiz question to move on to the next section",
    "questions": [
      {
        "question": "What does biodiversity refer to?",
        "questionType": "text",
        "questionPic": "./assets/butterfly.jpg", //  display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "Animals",
          "Mammals",
          "All life on earth",
          "molecules"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Biological diversity, or biodiversity, refers to the variety of all life on Earth—on all levels, from genes to species, ecosystems, and biomes.",
        "point": "20"
      },
      {
        "question": " The Amazon Rainforest alone accounts for rouchly what percentage of all known species!",
        "questionType": "text",
        "questionPic": "./assets/amazon.jpg",
        "answerSelectionType": "single",
        "answers": [
          "16%",
          "10%",
          "5%"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "The Amazon Rainforest alone accounts for about 10% of all known species! ",
        "point": "20"
      },
    ]
  } 

  function QuizContainer() {
    return <Quiz quiz={quiz}/>;
  }
  
  export default QuizContainer;
  

