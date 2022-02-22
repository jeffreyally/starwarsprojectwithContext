const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [{
				name:'one'
			}],
			characters: [],
			planets:[],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadcharactersarray: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://swapi.dev/api/people/")
				.then((response) => {
				  return response.json();
				})
				.then((data) => {
				  // console.log(data.results);
				  setStore({characters:data.results});
				})
				.catch((error) => {
				  console.log("Looks like there was a problem: \n", error);
				});
			},
			loadplanetsarray: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://swapi.dev/api/planets/")
				.then((response) => {
				  return response.json();
				})
				.then((data) => {
				  // console.log(data.results);
				  setStore({planets:data.results});
				})
				.catch((error) => {
				  console.log("Looks like there was a problem: \n", error);
				});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addToFavorites:(name)=>{
				console.log(name)
				const store = getStore();
				store.favorites.push({name: name})
				//console.log(store)
				return setStore({store:store})


			},
		}
	};
};

export default getState;
