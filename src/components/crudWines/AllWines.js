import React, {useState, useEffect} from 'react';
import AddWine from './add/AddWine'
import ajax from '../../lib/ajax'
import './crudWines.css'

const AllWines = (props) => {
  const [wines, setWines] = useState('')

  const singleWine = (wine) => {

    props.allWines.history.push(`user/wines/${wine}`)
  }
  const getWines = () => {
    ajax.getAllWines()
      .then(res => {
        setWines(res.data)
      })
      .catch(err => {
        console.warn(err);
      })
  }

  useEffect(() => {
    getWines()
  }, [])
  return(
    <div className="winesBackend">
      <div className="wineListBack">
        {
          wines.length > 0
          ?
          <ul className="allWinesBack">
            {wines.map(wine => {
              return (<li className="wineListBack"
              key={wine.wineName}
              onClick={() => singleWine(wine.wineName)}>
                <h2 className="wineHeadingBack">{wine.wineName}</h2>
                <img src={wine.img} alt={wine.wineName} className="wineImgBack"/>
              </li>)
            })
          }
          </ul>
          :
          <h1>Loading...</h1>
        }
      </div>
      <div className="addWineForm">
        <AddWine/>
      </div>
    </div>
  )
}

export default AllWines
