import React, {useState, useEffect} from 'react';
import AddWine from './add/AddWine'
import ajax from '../../lib/ajax'

const AllWines = (props) => {
  console.log("allWines: ", props);
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

  const singleWine = (wine) => {
    console.log("clicked");
    console.log(wine);
    props.toggledisplay(wine)
    // props.allWines.history.push(`user/${wine}`)
  }
  useEffect(() => {
    getWines()
  }, [])
  return(
    <div className="winesBackend">
      <div className="winelist">
        {
          wines.length > 0
          ?
          <ul className="allWines">
            {wines.map(wine => {
              return (<li key={wine.wineName} onClick={() => singleWine(wine.wineName)}>{wine.wineName}</li>)
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
