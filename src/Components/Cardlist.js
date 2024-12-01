import React from "react";
import Card from './Card';

const Cardlist = ({filteredUserData}) =>{
    const mappeddb = filteredUserData.map((user,i)=> <Card key={i} username={filteredUserData[i].username} email={filteredUserData[i].email} id ={filteredUserData[i].id} />  )
    
     return (
                <div>
                       {mappeddb} 
                </div>
               
            )
};
export default Cardlist;
