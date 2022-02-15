import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const Card = () => (
    <>
	<div class="card" style={{width: "200px"}}>
  <img class="card-img-top" src="..." alt="Card image cap" /><div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
</div>
</>
);