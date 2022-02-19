import React from "react";

export const DetailsView = (props) => {
  let obj = props.location.state
 console.log(obj)
  return(
<>
<div class="card m-1" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={obj.imgURL} className="fit" alt="..."  class="w-100"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        
      </div>
    </div>
  </div>
</div>
    </>
  )
 
}