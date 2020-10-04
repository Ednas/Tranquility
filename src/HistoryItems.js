import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


// Simple function to check if there is no data in the Object
function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


function HistoryItems(props) {
    console.log(props)

    return isEmpty(props) ? (
        <div className="HistoryItemsShimmer"> No Exercises Available </div>
    ) : (
            <div className="card">
                <Router>
                    <Link to={props.link}>
                        <div
                            role="img"
                            aria-label="click item"
                            // onClick={() => props.handleClick(props.id)}
                            style={{ backgroundImage: `url("${props.image}")` }}
                            className={`history-item${props.shake ? " shake" : ""}`}
                        />

                    </Link>
                    <span id="title"><h3>{props.title}</h3></span>
                    
                </Router>
            </div>
        )
}

export default HistoryItems;