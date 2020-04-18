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

  // ajax call get single wine

  const handleName = (e) => {
    const newName = e.target.value
    setName(newName)

  }
  const handleDescription = (e) => {
    const newDescription = e.target.value
    setDescription(newDescription)

  }
  const handleImg = (e) => {
    // e.preventDefault()
    const newImg = e.target.value
    setImg(newImg)
   //  console.log("here");
   //  const imgFile = e.target.files[0];
   //  console.log(imgFile);
   //  const formData = new FormData()
   //  formData.append("upload_preset", "BensonAndTheMooch");
   //  formData.append("file", imgFile)
   //  for (var key of formData.entries()) {
   //     console.log(key[0] + ', ' + key[1]);
   // }
   //
   //  axios.post('https://api.cloudinary.com/v1_1/dm0vmiksn/image/upload', formData)
   //  .then( res => {
   //    console.log("i got here", res.data.url);
   //    // setImg(res.data.url)
   //  })
   //  .catch(err => {
   //    console.warn("error", err)
   //  })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    ajax.addWine(name, description, img)
    .then(res => console.log(res.data))
  }
  // on mount
  useEffect(() => {
    // getWine()
  }, [])

  return(
    <div className="singleWineBackend">
      <form onSubmit={handleSubmit} className="editDeleteWineForm">
        <ul className="editDeleteWineUL" >
          <li className="editDeleteWineLI">
            <input type="text" placeholder="Add Wine" onChange={handleName} className="editDeleteWineInput"/>
          </li>
          <li className="editDeleteWineLI">
            <input type="text" placeholder="Add description" onChange={handleDescription} className="editDeleteWineTeaxtArea"/>
          </li>
          <li className="editDeleteWineLI">
            <input type="test" placeholder="Add image" onChange={handleImg} className="editDeleteWineInput"/>
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
