import React, { Component } from "react"
// import logo from '../globe.svg';
import RightContainer from './RightContainer'


import data from "./biodata.json";

class Biodiversity extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            data,
            nav: 0,
            text: 0
        };
        this.handleClick = this.handleClick.bind(this);
      }
  

    handleClick(id, e) {
        e.preventDefault();
        this.setState(() => ({
            text: id
          }));
      }

    // TODO refactor state
    componentDidMount() {
        this.setState(this.state.data);
    }


    // export default function () {
    render() {
        // const isLoggedIn = props.isLoggedIn;
    //     if (isLoggedIn) {
    //       return <UserGreeting />;
    //     }
    //     return <GuestGreeting />;
    //   }
        const pvalue = this.props;
        console.log(pvalue)
        return (
            <div className="row edPage">
                <div className="col-md-2 edNav">
                {this.state.data[0].navigation.map(item => (
                    <div key={item.id} className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                               <button 
                                    onClick={(e) => this.handleClick(item.id, e)}
                                    className="nav-link" 
                                    id="v-pills-profile-tab"  
                                    role="tab" aria-controls="v-pills-profile" 
                                    aria-selected="false" 
                                    value="0" >
                                   {item.nav}
                           </button>
                    </div>
                ))}
                </div>
                <div className="col-md-6 middle">
                    <h1>
                        {this.state.data[0].title}
                    </h1>
                    <img src={this.state.data[0].image} className="ed-logo" alt="logo" />
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text" id="text">{this.state.data[0].edutext[this.state.text]}</p>
                        </div>
                    </div>
                    <div className="source">
                        <a href={this.state.data[0].source[this.state.text]}>{this.state.data[0].source[this.state.text]}</a>
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
