import React, {useState, useEffect} from 'react';
import ajax from '../../lib/ajax'
import './wines.css'
const Wines = () => {

  const [wines, setWines] = useState('')

  const getWines = () => {
    ajax.getAllWines()
      .then(res => {
        console.log("all wines: ", res.data);
        setWines(res.data)
      })
      .catch(err => {
        console.warn(err);
      })
  }

  useEffect(() => {
    getWines()
  }, [])

  return (
    <div className="winesContainer" id="wines">
      {
        wines.length > 0
        ?
        <ul className="wineList">
          {
            wines.map(wine => {
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
        :
        <h1>loading...</h1>
      }
    </div>
  )
}

export default Wines
