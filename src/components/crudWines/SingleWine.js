import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import ajax from '../../lib/ajax'
import Update from './update/Update'
import Delete from '../delete/Delete'
import "./crudWines.css"
const SingleWine = (props) => {

  const [wine, setWine] = useState('')

  // ajax call get single wine
  const getWine = () => {

    ajax.getSingleWine(props.match.params.wine)
      .then(res => {
        setWine(res.data[0])

      })
      .catch(err => {
        console.warn(err);
      })
  }
  const deleteWine = () => {

    ajax.deleteWine(wine.wineName)


  }
  // on mount
  useEffect(() => {
    getWine()

  }, [])

  return(
    <div className="singleWineBackend">
    {
      wine !== ''
      ?
      <div>
        <Update wine={wine}/>
        <Delete delete={() => deleteWine()}/>
        <button onClick={() => props.history.push(`/user`)}>Back</button>
      </div>
      :
      <h1>Loading...</h1>
    }
    </div>
  )
}

export default SingleWine
