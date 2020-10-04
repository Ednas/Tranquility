import React, { Component } from "react"
// import logo from '../globe.svg';
import RightContainer from './RightContainer'
import SideNav from './SideNav';
// import QuizContainer from './Quiz'

import data from "./pageInformation.json";

class EdPageContainer extends Component {
  state = {
    data,
    currentPageData: {}
  };

  getPageData() {
    const currPage  = window.location.pathname;
    console.log(currPage)
    data.forEach(el => {
        var checklink = "/" + el.link;
        console.log(checklink)
        if (checklink === currPage){
            console.log(el)
            this.setState({currentPageData: el})
            // this.setState();  
            // this.setState((state, el) => {
            //     return {currentPageData: el};
            //   });
        }
    })
console.log(this.state.currentPageData);
  }

  // TODO refactor state
  componentDidMount() {
    this.setState(this.state.data);
    this.getPageData();
    // this.setState(this.state.currentPageData);
  }


// export default function () {
    render(){
        console.log(this.state.data);

    console.log(window.location.pathname)
    return (
        <div className="row edPage">
            
            <div className="col-md-2 edNav">
                <SideNav />
            </div>
            <div className="col-md-7">  
        
                <p>
                {this.state.currentPageData.title}
                </p>
                
                <img src={this.state.currentPageData.image} className="ed-logo" alt="logo" />

                </div>
                
            {/* <QuizContainer /> */}
            <div className="col-md-3 edNav">
                <RightContainer />
            </div>
        </div>
    )
}
}
export default EdPageContainer;
// class Profile extends React.Component {
//     state = {
//       user: null
//     }
//     componentDidMount () {
//       const handle  = window.location.pathname
//       console.log(handle)
  
//       fetch(`https://api.twitter.com/user/ednas`)
//         .then((user) => {
//           this.setState(() => ({ user }))
//         })
//     }
//     render() {
//         return(
//       <div>{this.state.user}</div>
//         )
//     }
//   }
