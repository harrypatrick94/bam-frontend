import React, {useState, useEffect} from 'react';
import './wines.css'

const ShowWine = (props) => {
  console.log(props.wine);
  return (
    <div>
    <h2 className="showWineHeading">something {props.wine[0].fizzFactor}</h2>
    <ul className="wineList">
        {
          props.wine.map(wine => {
            return(
              <li className="winesLI" key={wine.wineName}>
                <h1>{wine.wineName}</h1>
                <img src={wine.img} alt={wine.wineName} className="wineImg"/>
                <p className="wineDescription">{wine.description}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ShowWine
