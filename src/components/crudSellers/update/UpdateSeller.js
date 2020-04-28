import React, {useState, useEffect} from 'react';
import Form from '../form/Form'
import ajax from '../../../lib/ajax'

const UpdateSeller = (props) => {

  const [id, setId] = useState(undefined)

  const handleSubmit = (e, name, description, img, link, business) => {
    e.preventDefault()
    ajax.updateSingleSeller(name, description, img, link, business, id)
  }
  useEffect(() => {
    setId(props.seller._id)
  }, [])

  return (
    <div>
      <Form
        handleSubmit={handleSubmit}
        seller={props.seller}
        heading="Update"
      />
    </div>
  )
}

export default UpdateSeller
