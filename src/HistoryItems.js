import React from "react";

// Simple function to check if there is no data in the Object
function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


function HistoryItems(props) {
 

    return isEmpty(props) ? (
        <div className="HistoryItemsShimmer"> No Exercises Available </div>
    ) : (
        <div className="card">
        <div
            role="img"
            aria-label="click item"
            onClick={() => props.handleClick(props.id)}
            style={{ backgroundImage: `url("${props.image}")` }}
            className={`history-item${props.shake ? " shake" : ""}`}
        />
        </div>
        )
}

export default HistoryItems;