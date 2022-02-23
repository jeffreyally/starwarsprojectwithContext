import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
let starwarslogo =
  "https://www.cultofwhatever.com/wp-content/uploads/2015/09/star-wars-retro-logo-2.png";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="dropdown d-flex justify-content-between">
        <Link to="/">
          <div>
            <img className="navbarlogotopleft" src={starwarslogo} />
          </div>
        </Link>

        <div className="divAroundFavoritesList">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites List
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {store.favorites.map((fav, index) => {
              return <li className="favoritelistLIs" key={index} id={index}>{fav.name}<i className="fas fa-trash" onClick={()=>{
                    actions.deleteAFavorite(index)
                
              }}></i> </li>;
            })}
          </ul>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
};
