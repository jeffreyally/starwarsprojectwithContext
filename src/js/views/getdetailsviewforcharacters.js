import React from "react";

export const GetDetailsViewForCharacters = (props) => {
//props.location.state shows us our array of character objects
//props.match.params.ID is a string of the url we chose.
//above is string of url



let currentcharacter = props.location.state.filter((characterobject) =>{

    return characterobject.name == props.match.params.ID

})

console.log(currentcharacter)
    
  return (
    <div className="container">
      <div className="card mb-3 mx-auto">
        <div className="row g-0">
          <div className="col-md-4">
            <img src='' className="fit" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{currentcharacter[0].name}</h5>
              <p className="card-text">{`Birth Year: ` + currentcharacter[0].birth_year}<br></br>{`Height: ` + currentcharacter[0].height+`cm`}<br></br>
              {`Number of Film Appearances: ` + currentcharacter[0].films.length}
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