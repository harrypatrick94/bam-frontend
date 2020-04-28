import React, {useState, useEffect} from 'react';
import "../crudSeller.css"

const Form = (props) => {

  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState(undefined)
  const [description, setDescription] = useState(undefined)
  const [img, setImg] = useState(undefined)
  const [link, setLink] = useState(undefined)
  const [business, setBusiness] = useState(undefined)

  const getSeller = () => {
    const {name, description, img, link, business} = props.seller
    setName(name)
    setDescription(description)
    setImg(img)
    setLink(link)
    setBusiness(business)
    setShowForm(true)
  }

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }
  const handleImg = (e) => {
    setImg(e.target.value)
  }

  const handleLink = (e) => {
    setLink(e.target.value)
  }
  const handleBusiness = (e) => {
    setBusiness(e.target.value)
  }

  useEffect(() => {
    props.seller ? getSeller() : setShowForm(true)
  }, [])

  return (
    <>
    {
      showForm
      ?
        <form onSubmit={(e) => props.handleSubmit(e, name, description, img, link, business)} className="editDeleteSellerForm">
          <h2>{props.heading}</h2>
          <ul className="editDeleteSellerUL" >
            <li className="editDeleteSellerLI">
              <label for="name">name</label>
              <input type="text" placeholder={name} onChange={handleName} className="editDeleteSellerInput" defaultValue={name}/>
            </li>
            <li className="editDeleteSellerLI">
              <label for="description">description</label>
              <input type="text" placeholder={description} onChange={handleDescription} className="editDeleteSellerTeaxtArea" defaultValue={description}/>
            </li>
            <li className="editDeleteSellerLI">
            <label for="img">img</label>
              <input type="test" placeholder={img} onChange={handleImg} className="editDeleteSellerInput" defaultValue={img}/>
            </li>
            <li className="editDeleteSellerLI">
              <label for="link">link</label>
              <input type="text" placeholder={link} onChange={handleLink} className="editDeleteSellerInput" defaultValue={link}/>
            </li>
            <li className="editDeleteWineLI">
              <input type="radio" value="retail" name="wine" onClick={handleBusiness}/>
              <label for="retail">retail</label>
              <input type="radio" value="restaurant" name="wine" onClick={handleBusiness}/>
              <label for="restaurant">restaurant</label>
            </li>
            <li className="editDeleteSellerLI">
              <input type="submit"/>
            </li>
          </ul>
        </form>
      :
      <div>loading</div>
    }
    </>
  )
}

export default Form
