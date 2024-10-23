import React from "react";
const Scroll = (props) => {
    return(
        <div style={{height : "100Vh",overflowY: "scroll",}}>
            {props.children}
        </div>
    );
};
export default Scroll;