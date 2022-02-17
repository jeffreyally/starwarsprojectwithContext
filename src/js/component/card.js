import React, { useState, useEffect, useContext } from "react";
import PropTypes, { array } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";




export const Card = ({ type, characters, planets }) => {
  
    console.log(type)
    console.log(characters)
    console.log(planets)
    
  

    
    
    
    

    return (
        <div className = 'flex'>
        
        {type == "Character" ? characters.map((item)=>{

            return (
           
            <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src='https://static3.srcdn.com/wordpress/wp-content/uploads/2020/02/chewbacca-loreal-meme-Edited-1.jpg?q=50&fit=crop&w=480&h=300&dpr=1.5' alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{type}</h5>
                <p className="card-text">
                    <p>{item.name}</p>
                    
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            )
        }):null
        }
{type == "Planet" ? planets.map((item)=>{

return (

<div className="card" style={{width: '18rem'}}>
<img className="card-img-top" src='https://wallpaperaccess.com/full/1251069.jpg' alt="Card image cap" />
<div className="card-body">
    <h5 className="card-title">{type}</h5>
    <p className="card-text">
        <p>{item.name}</p>
        
    </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>
)
}):null
    
}

</div>
)}