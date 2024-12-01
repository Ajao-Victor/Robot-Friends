import React,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { searchInput,requestRobots} from "../Components/Action";
import Cardlist from "../Components/Cardlist";
import SearchBox from '../Components/SearchBox';
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";


const App = () => {
 const dispatch = useDispatch();
 const robotData = useSelector(state => state.requestRobots.robott);
 const SearchFieldInput = useSelector(state => state.searchRobot.SearchField);
//  const isPending = useSelector(state => state.requestRobots.isPending);
 const [filteredUserData ,setFilteredUserData] = useState([]);

useEffect(() => {
    dispatch(requestRobots());
    // const data = robotData    
 },[dispatch,robotData,SearchFieldInput]);
 useEffect(() => {
    // console.log(robotData);
    const filteringRobot = robotData.filter(robot =>   robot.username.toLowerCase().includes(SearchFieldInput.toLowerCase())) ;
    setFilteredUserData(filteringRobot);
 },[dispatch,SearchFieldInput,robotData])
 const onSearchChange = (event) => {
    dispatch(searchInput(event.target.value));   

 }; 

                  return(
                    <div>
                         <SearchBox search = {onSearchChange}/>

                         <Scroll>
                             <ErrorBoundry>
                                 <Cardlist filteredUserData ={filteredUserData}/>
                             </ErrorBoundry>
                         </Scroll>
                  </div>
                  )

                    
 
};
export default App;




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

//                     (<div>
//                         <SearchBox search = {onSearchChange}/>
//                         <Scroll>
//                             <ErrorBoundry>
//                                 <Cardlist robots = {filteredRobot}/>
//                             </ErrorBoundry>
//                         </Scroll>
//                     </div>)
        
        
//     }

// };
// export default connect(mapStateToProps,mapDispatchToProps)(App);



