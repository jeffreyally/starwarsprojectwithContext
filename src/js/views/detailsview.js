import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const DetailsView = (props) => {
  let obj = props.location.state;

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