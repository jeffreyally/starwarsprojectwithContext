import React, { useState, useEffect, useContext } from "react";
import PropTypes, { array } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

//only copied this one import below along with line 14.

export const Card = ({ type, cardData }) => {
  const { store, actions } = useContext(Context);

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
            state: cardData,
          }}
        >
          <button className="btn btn-primary">Get Details</button>
          <i
            className="far fa-heart"
            onClick={() => {
              
              
              actions.addToFavorites(cardData.name);
            }}
          ></i>
        </Link>
      </div>
    </div>
  );
};
