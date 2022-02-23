import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsView = (props) => {
  let obj = props.location.state;
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="card m-1">
        <div className="row g-0 d-flex">
          <div className="col-md-4 d-flex">
            <img src={obj.imgURL} className="fit" alt="..." className="w-100" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{textAlign:'center'}}>{obj.name}</h5>
              <p className="card-text">
              
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <Link to="/">
              <button className="btn btn-primary" style={{float:'right' ,marginBottom:'10px' ,marginTop:'80px'}}>Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="detailsViewDivWith4Facts">
      {store.characters.map((eachcharacter,index)=>{
        //maybe return 4 divs with a p tag in each?
        if(obj.name == eachcharacter.name ){ return <p key={index}>{eachcharacter.name}</p>}
       
      })}
      </div>

    </>
  );
};


// let threefacts = <span>{`${obj.prop1}: ${obj.value1}`}</span>
// <br></br>
// <span>
//   {`${obj.prop2}: ${obj.value2}`}
//   <br></br>
// </span>
// {`${obj.prop3}: ${obj.value3}`}