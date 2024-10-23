import { CHANGE_SEARCH_FIELD,
         REQUEST_ROBOTS_PENDING,
         REQUEST_ROBOTS_SUCCESS,
         REQUEST_ROBOTS_FAILED 
       } from "./const"
// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";
export const searchInput = (text) => {
 return (
    {
        type : CHANGE_SEARCH_FIELD,
        payload : text
    }
 )
};
// this is a higher order function and it requires a redux-thunk middleware to get dispatched

export const requestRobots = () => (dispatch) =>{
dispatch({type : REQUEST_ROBOTS_PENDING})
fetch('https://jsonplaceholder.typicode.com/users')
.then(Response => Response.json())
.then(data => {dispatch({type: REQUEST_ROBOTS_SUCCESS,
    payload:data})
console.log(data)})
.catch(error => dispatch({type:REQUEST_ROBOTS_FAILED,
                           payload:error}));

}

// export const requestRobots = () => {
    
// }