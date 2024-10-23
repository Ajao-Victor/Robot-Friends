
import { CHANGE_SEARCH_FIELD,
         REQUEST_ROBOTS_PENDING,
         REQUEST_ROBOTS_SUCCESS,
         REQUEST_ROBOTS_FAILED 
        } from "./const";
        
const initialState = {
    SearchField : '',
};
export const searchRobot = (state = initialState,action) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state,SearchField: action.payload}
        default:
            return state;
    }
};
const initialStateRobots = {
    isPending : false,
    robott : [],
    error : ""
    
}
export const requestRobots = (state = initialStateRobots,action) => {
switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
        return Object.assign({}, state,{isPending : true})
    case REQUEST_ROBOTS_SUCCESS:
        return Object.assign({},state,{robott : action.payload,isPending : false})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state,{error :action.payload,isPendinqg :false})
    default:
        return initialStateRobots;
}
};

// https://www.npmjs.com/package/axios
// https://axios-http.com/