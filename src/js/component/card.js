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
          <button className="btn btn-primary ">Get Details</button>
        </Link>
        <span class="fa-stack fa-2x" style={{ marginLeft: "34%" }}>
          <i class="fas fa-circle fa-stack-2x fa-inverse"></i>
          <i
            class="fas fa-heart fa-stack-1x "
            onClick={() => {
              actions.addToFavorites(cardData.name);
            }}
          ></i>
        </span>
      </div>
    </div>
  );
};

let g = `<span class="fa-stack fa-2x">
<i class="fa-solid fa-circle fa-stack-2x"></i>
<i class="fa-solid fa-flag fa-stack-1x fa-inverse"></i>
</span>`;

let h = `   <i
className="far fa-heart fa-2x"
onClick={() => {
  
  
  actions.addToFavorites(cardData.name);
}}
></i>`;
