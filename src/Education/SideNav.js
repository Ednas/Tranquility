import React from "react";

function SideNav(props) {
console.log(props)


    
    return (           
    //     <div
    //     role="img"
    //     aria-label="click item"
    //     // onClick={() => props.handleClick(props.id)}
    //     style={{ backgroundImage: `url("${props.image}")` }}
    //     className={`history-item${props.shake ? " shake" : ""}`}
    // />
        // <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button 
                // onClick={handleClick}
                className="nav-link" 
                id="v-pills-profile-tab"  
                role="tab" aria-controls="v-pills-profile" 
                aria-selected="false" 
                value="0" >
                    {props.navigation}
            </button>
        // </div>

  )
    
}

export default SideNav;