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