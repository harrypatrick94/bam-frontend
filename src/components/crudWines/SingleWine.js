import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import ajax from '../../lib/ajax'
import Update from './update/Update'
import Delete from './delete/Delete'
import "./crudWines.css"
const SingleWine = (props) => {
  // console.log(props);
  const [wine, setWine] = useState('')
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [img, setImg] = useState('')

  // ajax call get single wine
  const getWine = () => {

    console.log("gettt single wineee");
    const wineHeader = props.wine

    ajax.getSingleWine(wineHeader)
      .then(res => {
        console.log("Single wine: ", res.data[0]);
        setWine(res.data[0])

      })
      .catch(err => {
        console.warn(err);
      })
  }

  const handleName = (e) => {
    const newName = e.target.value
    setName(newName)
    console.log(newName);
  }
  const handleDescription = (e) => {
    const newDescription = e.target.value
    setDescription(newDescription)
    console.log(newDescription);
  }
  const handleImg = (e) => {
    const newImg = e.target.value
    setImg(newImg)
    console.log(newImg);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(wine._id);
    ajax.updateSingleWine(wine.wineName, name, description, img, wine._id)
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
        <Update update={props}/>
        <Delete delete={props}/>
        <Link to="/user">Back</Link>
      </div>
      :
      <h1>Loading...</h1>
    }
    </div>
  )
}

export default SingleWine
