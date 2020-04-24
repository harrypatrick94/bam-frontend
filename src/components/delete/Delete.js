import React, {useState, useEffect} from 'react';
import "../crudWines/crudWines.css"
const Delete = (props) => {

  return(
    <div className="deleteWineBackend">
      <button onClick={props.delete}>Delete Me</button>
    </div>
  )
}

export default Delete
