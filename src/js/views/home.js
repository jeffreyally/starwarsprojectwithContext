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
		getCharacters();
		getPlanets();
	}
		, []);
		
	const getPlanets = () => {
		
		fetch("https://swapi.dev/api/planets")
		.then((response) => {
			//console.log(response)
			return response.json();
		})
		.then((jsonresponse)=> {
			
			setArrayOfPlanets(jsonresponse.results)
			
			
		})
	}

	const getCharacters = () => {
		
		fetch("https://swapi.dev/api/people/")
		.then((response) => {
			
			return response.json();
		})
		.then((jsonresponse)=> {
			
			setArrayOfCharacters(jsonresponse.results)
			
			
		})
	}

	console.log(arrayOfCharacters)
	console.log (arrayOfPlanets)


return(
	<>
	<h1>Characters</h1>
	<Card type="Character" characters={arrayOfCharacters}/>
	<br></br>
	<h1>Planets</h1>
	<Card type="Planet" planets={arrayOfPlanets}/>
	
	</>
	);
};
