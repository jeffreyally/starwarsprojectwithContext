import React from "react";

export const DetailsView = (props) => {
  let obj = props.location.state
 console.log(obj)
  return(
<>
<div className="card m-1" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={obj.imgURL} className="fit" alt="..."  className="w-100"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className ="card-title">{obj.name}</h5>
        <p className="card-text"><span>{`${obj.prop1}: ${obj.value1}`}</span>
          <br></br>
          <span>
            {`${obj.prop2}: ${obj.value2}`}
            <br></br>
          </span>
          {`${obj.prop3}: ${obj.value3}`}</p>
        
      </div>
    </div>
  </div>
</div>
    </>
  )
 
}