import React from "react";
import Quiz from 'react-quiz-component';
// "https://dummyimage.com/600x400/000/fff&text=X"

const quiz =  {
    "quizTitle": "Biodiversity Quiz",
    "quizSynopsis": "Answer the quiz question to move on to the next section",
    "questions": [
      {
        "question": "What does biodiversity refer to?",
        "questionType": "text",
        "questionPic": "./assets/butterfly.jpg", // if you need to display Picture in Question
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
      // {
      //   "question": "ReactJS is developed by _____?",
      //   "questionType": "text",
      //   "answerSelectionType": "single",
      //   "answers": [
      //     "Google Engineers",
      //     "Facebook Engineers"
      //   ],
      //   "correctAnswer": "2",
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "20"
      // },
      // {
      //   "question": "ReactJS is an MVC based framework?",
      //   "questionType": "text",
      //   "answerSelectionType": "single",
      //   "answers": [
      //     "True",
      //     "False"
      //   ],
      //   "correctAnswer": "2",
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "10"
      // },
      // {
      //   "question": "Which of the following concepts is/are key to ReactJS?",
      //   "questionType": "text",
      //   "answerSelectionType": "single",
      //   "answers": [
      //     "Component-oriented design",
      //     "Event delegation model",
      //     "Both of the above",
      //   ],
      //   "correctAnswer": "3",
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "30"
      // },
      // {
      //   "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      //   "questionType": "photo",
      //   "answerSelectionType": "single",
      //   "answers": [
      //     "https://dummyimage.com/600x400/000/fff&text=A",
      //     "https://dummyimage.com/600x400/000/fff&text=B",
      //     "https://dummyimage.com/600x400/000/fff&text=C",
      //     "https://dummyimage.com/600x400/000/fff&text=D"
      //   ],
      //   "correctAnswer": "1",
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "20"
      // },

    ]
  } 

  function QuizContainer() {
    return <Quiz quiz={quiz}/>;
  }
  
  export default QuizContainer;
  

