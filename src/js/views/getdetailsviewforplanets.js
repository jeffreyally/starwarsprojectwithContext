import React from "react";

export const GetDetailsViewForPlanets = (props) => {
    console.log(props.location.state)
//props.location.state shows us our array of character or planet objects
//props.match.params.ID is a string of the url we chose.
//above is string of url
  

let currentplanet = props.location.state.filter((characterobject) =>{

 return characterobject.name == props.match.params.ID

})

 console.log(currentplanet)
    
  return (
    <div className="container">
      <div className="card mb-3 mx-auto">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.location.state[10]} className="fit" alt="..." width="400" height="400" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{currentplanet[0].name}</h5>
              <p className="card-text">{`Gravity: ` + currentplanet[0].gravity}<br></br>{`Climate: ` + currentplanet[0].climate}<br></br>
              {`Population: ` + currentplanet[0].population}
              </p>
              <ul className="d-flex flex-column">
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}