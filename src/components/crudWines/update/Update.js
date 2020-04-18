import React, {useState, useEffect} from 'react';
import ajax from '../../../lib/ajax'
import "../crudWines.css"
const Update = (props) => {
  console.log("props update: ", props.update.wine);
  const [wine, setWine] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [img, setImg] = useState('')

  // ajax call get single wine
  const getWine = () => {

    const wineHeader = props.update.wine
    ajax.getSingleWine(wineHeader)
      .then(res => {
        console.log("Single wine: ", res.data);
        setWine(res.data)
        setName(res.data[0].wineName)
        setDescription(res.data[0].description)
        setImg(res.data[0].img)

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
    console.log(wine[0]._id);
    ajax.updateSingleWine(wine[0].wineName, name, description, img, wine[0]._id)
  }
  // on mount
  useEffect(() => {
    getWine()
  }, [])

  return(
    <div className="editWineBackend">

    {
      wine.length > 0
      ?
      <>
      <h1>{wine[0].wineName}</h1>
      <form onSubmit={handleSubmit} className="editDeleteWineForm">
        <h3>Update</h3>
        <ul className="editDeleteWineUL" >
          <li className="editDeleteWineLI">
            <input type="text" placeholder={wine[0].wineName} onChange={handleName} className="editDeleteWineInput" defaultValue={wine[0].wineName}/>
          </li>
          <li className="editDeleteWineLI">
            <input type="text" placeholder={wine[0].description} onChange={handleDescription} className="editDeleteWineTeaxtArea"
            defaultValue={wine[0].description}/>
          </li>
          <li className="editDeleteWineLI">
            <input type="text" placeholder={wine[0].img} onChange={handleImg} className="editDeleteWineInput" defaultValue={wine[0].img}/>
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
