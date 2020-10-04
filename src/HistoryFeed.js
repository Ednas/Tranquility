// import React, { useRef, useReducer, useEffect } from "react"

import React, { Component } from "react";
import Container from "./Container";
import HistoryItems from "./HistoryItems"
import data from "./data.json";

class HistoryFeed extends Component {
  state = {
    data
  };
  

  // TODO refactor state
  componentDidMount() {
    this.setState(this.state.data);
  }

//   componentDidMount() {
//     this.setState({ data: this.shuffleData(this.state.data) });
//   }

//   handleCorrectGuess = newData => {
//     const { topScore, score } = this.state;
//     const newScore = score + 1;
//     const newTopScore = Math.max(newScore, topScore);

//     this.setState({
//       data: this.shuffleData(newData),
//       score: newScore,
//       topScore: newTopScore
//     });
//   };

//   handleIncorrectGuess = data => {
//     this.setState({
//       data: this.resetData(data),
//       score: 0
//     });
//   };

//   resetData = data => {
//     const resetData = data.map(item => ({ ...item, clicked: false }));
//     return this.shuffleData(resetData);
//   };

//   shuffleData = data => {
//     let i = data.length - 1;
//     while (i > 0) {
//       const j = Math.floor(Math.random() * (i + 1));
//       const temp = data[i];
//       data[i] = data[j];
//       data[j] = temp;
//       i--;
//     }
//     return data;
//   };

  handleItemClick = id => {
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
        }
      }
      return newItem;
    });
    console.log(newData)
  };

  render() {
    return (
      <div>
        <Container>
          {this.state.data.map(item => (
            <HistoryItems
              key={item.id}
              id={item.id}
              link={item.link}
              title={item.title}
              image={item.image}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default HistoryFeed;