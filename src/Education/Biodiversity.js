import React, { Component } from "react"
// import logo from '../globe.svg';
import RightContainer from './RightContainer'
import SideNav from './SideNav';


import data from "./biodata.json";

class Biodiversity extends Component {
    state = {
        data,
        nav: 0,
        text: 0
    };

    handleChange(e) {
        alert("Clicked")
        console.log(e.target.value)
        this.setState({nav: e.target.value});
      }

    // TODO refactor state
    componentDidMount() {
        this.setState(this.state.data);
    }


    // export default function () {
    render() {
        return (
            <div className="row edPage">
                {this.state.data.map(item => (
                    <SideNav
                        key={item.id}
                        id={item.id}
                        navigation={item.navigation}
                        onClick={this.handleChange} 
                    />
                ))}
                <div className="col-md-6">
                    <h1>
                        {this.state.data[0].title}
                    </h1>
                    <img src={this.state.data[0].image} className="ed-logo" alt="logo" />
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text" id="text">{this.state.data[0].edutext[this.state.text]}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 edNav">
                    <RightContainer />
                </div>
            </div>
        )
    }
}
export default Biodiversity;
