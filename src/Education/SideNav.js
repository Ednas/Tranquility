import React from "react";

function SideNav(props) {
console.log(props.navigation.length)


    
    return (           
        <div className="col-md-2 edNav">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
     
        <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" href={props.key}>What is biodiversity</a>
 </div>
         <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
     
         <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" href={props.key}>Examples of biodiversity</a>
  </div>
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
     
          <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" href={props.key}>How has NASA researched or helped with biodiversity</a>
   </div>
   </div>
  )
    
}

export default SideNav;
// key={item.id}
// id={item.id}
// link={item.link}
// title={item.title}
// image={item.image}
{/* <div
                            role="img"
                            aria-label="click item"
                            // onClick={() => props.handleClick(props.id)}
                            style={{ backgroundImage: `url("${props.image}")` }}
                            className={`history-item${props.shake ? " shake" : ""}`}
                        /> */}