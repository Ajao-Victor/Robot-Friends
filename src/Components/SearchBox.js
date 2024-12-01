import React from "react";
import { useSelector } from "react-redux";
const SearchBox =({search}) => {
    const SearchField = useSelector(state => state.searchRobot.SearchField);
    return(
    <div style={{display: "flex", justifyContent: "center", width: "100%",backgroundColor: "cornsilk",}}>
        <div style={{display : "flex", flexDirection: "column",justifyContent : "center",alignSelf: "center",padding: "1% 10% 2% 10%",marginBottom: "5px"}}>
            <p style={{fontSize:"300%",fontFamily: "serif",fontWeight : "bolder"}}>ROBOT APP</p>
            <div style={{ position: "sticky", top: "10px"}}>
            <input type="text" placeholder="ROBOT SEARCH..." value={SearchField} onChange = {search} style={{padding:"20px",borderRadius :"10px",backgroundColor: "transparent"} }/>
            </div>
        </div>
        
    </div>
    )
};
export default SearchBox;