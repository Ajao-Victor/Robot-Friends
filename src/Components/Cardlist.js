import React from "react";
import Card from './Card';

const Cardlist = ({robots}) =>{
    const mappeddb = robots.map((user,i)=>{
        return(
            <div>
                <Card key={robots[1]} username={robots[i].username} email={robots[i].email} id ={robots[i].id} />
            </div>
        )
    })
    return(       
        <div>
        { mappeddb }
        </div>
    )
};
export default Cardlist;
