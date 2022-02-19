import React, { useState, useEffect, useContext } from "react";
import PropTypes, { array } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
//ad state to linkpath
export const Card = ({ type, cardData }) => {
  //console.log(type)
  console.log(cardData);

  // let planetimage = ["https://wallpaperaccess.com/full/1251069.jpg"];
  // let chewbaccaimg = [
  //   "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/02/chewbacca-loreal-meme-Edited-1.jpg?q=50&fit=crop&w=480&h=300&dpr=1.5",
  // ];

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={cardData.imgURL}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{cardData.name}</h5>
        <p className="card-text">
          <span>{`${cardData.prop1}: ${cardData.value1}`}</span>
          <br></br>
          <span>
            {`${cardData.prop2}: ${cardData.value2}`}
            <br></br>
          </span>
          {`${cardData.prop3}: ${cardData.value3}`}
        </p>
        <Link
          to={{
            pathname: `detailsview/${cardData.name}`,
            state: cardData
          }}
        >
          <button className="btn btn-primary">Get Details</button>
        </Link>
      </div>
    </div>
  );
};
