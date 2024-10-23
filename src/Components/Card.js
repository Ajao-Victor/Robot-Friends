import React from "react";
import 'tachyons';
import './Card.css';
const Card = ({id ,username ,email}) =>{
    return(
        //  <div className="dib tc bg-green w-25 grow">
       <div className="one">
           <div className="two">
               <img alt='robotImage' src={`https://robohash.org/${id}?100×100 `}/>
               <h3 >USERNAME : {username}</h3>
               <p >EMAIL : {email}</p>
            </div>
        </div>
    )
};
export default Card;