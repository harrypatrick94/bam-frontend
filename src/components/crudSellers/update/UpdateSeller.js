import React, {useState, useEffect} from 'react';
import ajax from '../../../lib/ajax'

const UpdateSeller = (props) => {

  const [seller, setSeller] = useState(false)
  const [ajaxName, setAjaxName] = useState(undefined)
  const [name, setName] = useState(undefined)
  const [description, setDescription] = useState(undefined)
  const [img, setImg] = useState(undefined)
  const [link, setLink] = useState(undefined)
  const [id, setId] = useState(undefined)

  const getSeller = () => {
    console.log("seller", props.seller);
    const {name, description, img, link, _id} = props.seller
    setAjaxName(name)
    setName(name)
    setDescription(description)
    setImg(img)
    setLink(link)
    setId(_id)
    setSeller(true)
  }
  const handleName = (e) => {
    const newName = e.target.value
    setName(newName)
  }
  const handleDescription = (e) => {
    const newDescription = e.target.value
    setDescription(newDescription)

  }
  const handleImg = (e) => {
    const newImg = e.target.value
    setImg(newImg)

  }
  const handleLink = (e) => {
    const newLink = e.target.value
    setLink(newLink)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    ajax.updateSingleSeller(ajaxName, name, description, img, link, id)
  }

  useEffect(() => {
    getSeller()
  }, [])

  return (
    <div>
    {
      link !== undefined
      ?
      <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit} className="editDeleteSellerForm">
        <h3>Update</h3>
        <ul className="editDeleteSellerUL" >
          <li className="editDeleteSellerLI">
            <input type="text" placeholder={name} onChange={handleName} className="editDeleteSellerInput" defaultValue={name}/>
          </li>
          <li className="editDeleteSellerLI">
            <input type="text" placeholder={description} onChange={handleDescription} className="editDeleteSellerTeaxtArea"
            defaultValue={description}/>
          </li>
          <li className="editDeleteSellerLI">
            <input type="text" placeholder={img} onChange={handleImg} className="editDeleteSellerInput" defaultValue={img}/>
          </li><li className="editDeleteSellerLI">
            <input type="text" placeholder={link} onChange={handleLink} className="editDeleteSellerInput" defaultValue={link}/>
          </li>
          <li className="editDeleteSellerLI">
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

export default UpdateSeller
