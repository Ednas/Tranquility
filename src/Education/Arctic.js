import React, { Component } from "react"
// import logo from '../globe.svg';
import RightContainer from './RightContainer'
import SideNav from './SideNav';


import data from "./arcticdata.json";

class Arctic extends Component {
    state = {
        data
    };

    // TODO refactor state
    componentDidMount() {
        this.setState(this.state.data);
    }


    // export default function () {
    render() {
        console.log(this.state.data);


        return (
            <div className="row edPage">
                {this.state.data.map(item => (
                    <SideNav
                        key={item.id}
                        id={item.id}
                        navigation={item.navigation}
                    />
                ))}
                <div className="col-md-6">
                    <h1>
                        {this.state.data[0].title}
                    </h1>
                    <img src={this.state.data[0].image} className="ed-logo" alt="logo" />
                        <p>{this.state.data[0].edutext}</p>
                </div>

               
                <div className="col-md-4 edNav">
                    <RightContainer />
                </div>
            </div>
        )
    }
}
export default Arctic;
