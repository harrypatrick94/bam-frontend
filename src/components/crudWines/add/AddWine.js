import React, {useState, useEffect} from 'react';
import ImageUploader from "react-images-upload";
import axios from 'axios';
import ajax from '../../../lib/ajax'
import "../crudWines.css"
const AddWine = (props) => {
  // console.log(props.match.params.name);
  const [wine, setWine] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [img, setImg] = useState('')
  const [fizzFactor, setFizzFactor] = useState('')

  // ajax call get single wine

  const handleName = (e) => {
    setName(e.target.value)

  }
  const handleDescription = (e) => {
    setDescription(e.target.value)

  }
  const handleImg = (e) => {
    setImg(e.target.value)
  }
  const handleFizz = (e) => {
    setFizzFactor(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    ajax.addWine(name, description, img, fizzFactor)
    .then(res => console.log(res.data))
  }
  // on mount
  useEffect(() => {
    // getWine()
  }, [])

  return(
    <div className="singleWineBackend">
      <form onSubmit={handleSubmit} className="editDeleteWineForm">
        <h1>Add Wine</h1>
        <ul className="editDeleteWineUL" >
          <li className="editDeleteWineLI">
            <input type="text" placeholder="Add Wine" onChange={handleName} className="editDeleteWineInput"/>
          </li>
          <li className="editDeleteWineLI">
            <input type="text" placeholder="Add description" onChange={handleDescription} className="editDeleteWineTeaxtArea"/>
          </li>
          <li className="editDeleteWineLI">
            <input type="text" placeholder="Add image" onChange={handleImg} className="editDeleteWineInput"/>
          </li>
          <li className="editDeleteWineLI">
            <input type="radio" value="still" name="wine" onClick={handleFizz}/>
            <label for="still">still</label>
            <input type="radio" value="sparkling" name="wine" onClick={handleFizz}/>
            <label for="sparkling">sparkling</label>
          </li>
          <li className="editDeleteWineLI">
            <input type="submit"/>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default AddWine
