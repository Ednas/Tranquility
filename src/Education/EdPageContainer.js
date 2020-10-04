import React, { Component } from "react"
// import logo from '../globe.svg';
import RightContainer from './RightContainer'
import SideNav from './SideNav';


import data from "./pageInformation.json";

class EdPageContainer extends Component {
    state = {
        data: data,
        currentPageData: [data[0]]
    };

    getPageData() {
        const currPage = window.location.pathname;
        data.forEach(el => {
            var checklink = "/" + el.link;
            if (checklink === currPage) {
                console.log(el)
                // this.setState(this.state.currentPageData)
                // this.setState({ currentPageData: el })
                // this.setState();  
                // this.setState(( el) => {
                //     return  {currentPageData: el };
                //   });
                //   this.setState((state, el) => {
                //     return {currentPageData: state.currentPageData + el};
                //   });
            }
        })
        console.log(this.state.currentPageData);
    }

    // TODO refactor state
    componentDidMount() {
        this.setState(this.state.data);
        // this.getPageData();
        this.setState(this.state.currentPageData);
    }


    // export default function () {
    render() {
        console.log(this.state.data);


        return (
            <div className="row edPage">

                <div className="col-md-2 edNav">
           

                            {this.state.currentPageData.map(item => (
                                <SideNav
                                    key={item.id}
                                    id={item.id}
                                    navigation={item.navigation}
                                />
                            ))}
                        </div>
               
        
                <div className="col-md-6">

                    <h1>
                        {this.state.currentPageData[0].title}
                    </h1>

                    <img src={this.state.currentPageData[0].image} className="ed-logo" alt="logo" />
                                <p>{this.state.currentPageData[0].edutext}</p>
                </div>

               
                <div className="col-md-4 edNav">
                    <RightContainer />
                   
                </div>
            </div>
        )
    }
}
export default EdPageContainer;
