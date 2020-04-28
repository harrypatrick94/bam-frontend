import React, {useState, useEffect} from 'react';
import ajax from '../../lib/ajax'
import ShowWine from './ShowWine'
import './wines.css'
const Wines = () => {

  const [wines, setWines] = useState(false)
  const [still, setStill] = useState([])
  const [sparkling, setSparkling] = useState([])

  const getWines = () => {
    ajax.getAllWines()
      .then(res => {
        sortWines(res.data)
      })
      .catch(err => {
        console.warn(err);
      })
  }

  const sortWines = (winesToSort) => {
    winesToSort.map(wine => {
      if (wine.fizzFactor === 'sparkling') {
        setSparkling(sparkling => [...sparkling, wine])
      } else {
        setStill(still => [...still, wine])
      }
    })
    .then(setWines(true))

  }

  useEffect(() => {
    getWines()
  }, [])

  return (
    <div className="winesContainer" id="wines">
      {
        wines
        ?
        <div>
        <ShowWine wine={still} />
        <ShowWine wine={sparkling} />
        </div>
        :
        <p>loading</p>
      }

    </div>
  )
}

export default Wines
