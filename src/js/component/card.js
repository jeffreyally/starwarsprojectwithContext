import React, { useState, useEffect, useContext } from "react";
import PropTypes, { array } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";




export const Card = (props) => {
    
    
    
   let a = [...props.characters]
   let b;

   

   a.map((item)=>{
    console.log(item)
    return item
})
    
    
    
    

    return (
        <div className = 'flex'>
        
        {props.type == "Character" ? a.map((item)=>{

            return (
           
            <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.type}</h5>
                <p className="card-text">
                    <p>{item.name}</p>
                    
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            )
        }):<span></span>
        }
{props.type == "Planet" ? true:<h1>Get to work here for the planets section of the home view</h1>}
</div>
    )
}