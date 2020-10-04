import React from "react";
import QuizContainer from './Quiz'

function RightContainer(props) {
  return <aside className="right">{props.children}
 <QuizContainer />
  </aside>;
}

export default RightContainer;
