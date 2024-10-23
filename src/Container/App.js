// import React, { Component } from "react";
// import Cardlist from "../Components/Cardlist";
// import SearchBox from '../Components/SearchBox';
// import Scroll from "../Components/Scroll";
// import ErrorBoundry from "../Components/ErrorBoundry";
// import { connect } from "react-redux";
// import { searchInput,requestRobots } from "../Components/Action";

// const mapStateToProps = state => {
//     console.log(state)
//     return {
//         SearchField : state.searchRobot.SearchField,
//         robott : state.requestRobots.robott,
//         isPending : state.requestRobots.isPending,
//         error : state.requestRobots.error
//         }  
//     }
// const mapDispatchToProps = (dispatch) => {
//     return{
//         onSearchChange : (event) => dispatch(searchInput(event.target.value)),
//         onRequestRobots : () => dispatch(requestRobots())
//     }
// }
// class App extends Component{
//    componentDidMount() {
//     this.props.onRequestRobots();
//    }
//     render() {
//         const {robott,isPending,SearchField,onSearchChange} = this.props
//         const filteredRobot = robott.filter(robot => {
//             return robot.username.toLowerCase().includes(SearchField.toLowerCase())
//             }
//             )
//             return isPending ?
//                 <h1>LOADING... please wait</h1> :

//                     <div>
//                         <SearchBox search = {onSearchChange}/>
//                         <Scroll>
//                             <ErrorBoundry>
//                                 <Cardlist robots = {filteredRobot}/>
//                             </ErrorBoundry>
//                         </Scroll>
//                     </div>
        
        
//     }

// };
// export default connect(mapStateToProps,mapDispatchToProps)(App);



import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { searchInput,requestRobots } from "../Components/Action";
import Cardlist from "../Components/Cardlist";
import SearchBox from '../Components/SearchBox';
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";

const App = () => {
const robotData = useSelector(state => state.requestRobots.robott)
const dispatchRobotData = useDispatch();
const SearchField = useSelector(state => state.searchRobot.SearchField);
const dispatchSearchField = useDispatch();
const isPending = useSelector(state => state.requestRobots.isPending)

const onSearchChange = (event) => {
    return dispatchSearchField(searchInput(event.target.value))
 };
 const filteredRobot = robotData.filter(robot =>  robot.username.toLowerCase().includes(SearchField.toLowerCase()));

 useEffect(() => {
    dispatchRobotData(requestRobots());
 },[dispatchRobotData]);
//  const filteredRobot = robotData.filter(robot =>  robot.username.toLowerCase().includes(SearchField.toLowerCase()));

return  isPending ?
                <h1>LOADING... please wait</h1> :

                    <div>
                         <SearchBox search = {onSearchChange}/>
                         <Scroll>
                             <ErrorBoundry>
                                 <Cardlist robots = {filteredRobot}/>
                             </ErrorBoundry>
                         </Scroll>
                     </div>

};
export default App;
