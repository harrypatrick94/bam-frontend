import React, {useState, useEffect} from 'react';
import ajax from '../../../lib/ajax'
import "../crudWines.css"
const Update = (props) => {

  const [wine, setWine] = useState(false)
  const [ajaxName, setAjaxName] = useState(undefined)
  const [name, setName] = useState(undefined)
  const [description, setDescription] = useState(undefined)
  const [img, setImg] = useState(undefined)
  const [id, setId] = useState(undefined)

  const getWine = () => {
    console.log("wine", props.wine);
    const {wineName, description, img, _id } = props.wine
    setAjaxName(wineName)
    setName(wineName)
    setDescription(description)
    setImg(img)
    setId(_id)
    setWine(true)
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
    ajax.updateSingleWine(ajaxName, name, description, img, id)
  }
  // on mount
  useEffect(() => {
    getWine()
  }, [])

  return(
    <div className="editWineBackend">

    {
      wine
      ?
      <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit} className="editDeleteWineForm">
        <h3>Update</h3>
        <ul className="editDeleteWineUL" >
          <li className="editDeleteWineLI">
            <input type="text" placeholder={name} onChange={handleName} className="editDeleteWineInput" defaultValue={name}/>
          </li>
          <li className="editDeleteWineLI">
            <input type="text" placeholder={description} onChange={handleDescription} className="editDeleteWineTeaxtArea"
            defaultValue={description}/>
          </li>
          <li className="editDeleteWineLI">
            <input type="text" placeholder={img} onChange={handleImg} className="editDeleteWineInput" defaultValue={img}/>
          </li>
          <li className="editDeleteWineLI">
            <input type="submit"/>
          </li>
        </ul>
      </form>
      </>
      :
      <h1>Loading...</h1>
    }
    </div>
  )
}

export default Update
