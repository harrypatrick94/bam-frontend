import React, {useState, useEffect} from 'react';
import ajax from '../../../lib/ajax'
import "../crudWines.css"
const Delete = (props) => {
  console.log(props);

  const deleteWine = () => {
    // const id = props.id
    // console.log("iddddd: ", id);
    const wineHeader = props.delete.wine
    ajax.deleteWine(wineHeader)
    props.delete.singleWine.history.push(`/user`)
  }



  return(
    <div className="deleteWineBackend">
      <button onClick={deleteWine}>Delete Me</button>
    </div>
  )
}

export default Delete
