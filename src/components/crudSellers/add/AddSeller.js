import React, {useState} from 'react';
import axios from 'axios';
import ajax from '../../../lib/ajax';
import Form from '../form/Form'
import "../crudSeller.css"
const AddSeller = (props) => {

  const handleSubmit = (e, name, description, img, link, business) => {
    e.preventDefault()
    ajax.addSeller(name, description, img, link, business)
    .then(res => console.log(res.data))
  }

  return(
    <div className="singleSellerBackend">
      <Form
        handleSubmit={handleSubmit}
        heading="Add Seller"
      />
    </div>
  )
}

export default AddSeller
