import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="dropdown">
      <span className="spanAroundFavoritesList">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites List
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    {store.favorites.map((fav,index)=>{
		return <li>{fav.name}</li>
	})}
  </ul>
  </span>
</div>
	);
};
