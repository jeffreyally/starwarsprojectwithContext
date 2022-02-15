import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";




export const Card = (props) => {

    return (
    <div className="card" style={{width: '18rem'}}>
    <img className="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200" alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
            <p>{props.name} was born in {props.birthyear}</p>
            
        </p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    )
}