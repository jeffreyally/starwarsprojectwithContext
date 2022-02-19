import React from "react";
import { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
//URL/API George said to use is here: https://swapi.dev/

//two large collections of items means two arrays. Start with arrays and fetches
//create reusable card component
//map through arrays and render card for each

//home is landing page

export const Home = () => {
  const [arrayOfPlanets, setArrayOfPlanets] = useState([]);
  const [arrayOfCharacters, setArrayOfCharacters] = useState([]);

  useEffect(() => {
    getData("https://swapi.dev/api/people/", setArrayOfCharacters);
    getData("https://swapi.dev/api/planets/", setArrayOfPlanets);
  }, []);

  function getData(url, setter) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.results);
        setter(data.results);
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  }

  //console.log(arrayOfCharacters)
  //console.log (arrayOfPlanets)

  return (
    <>
      <h1>Characters</h1>
	  {arrayOfCharacters.map((character,index)=> {

     return <Card type="Character" character={character} key={index} />})}
      <br></br>
      <h1>Planets</h1>
      <Card type="Planet" planets={arrayOfPlanets} />
    </>
  );
};
