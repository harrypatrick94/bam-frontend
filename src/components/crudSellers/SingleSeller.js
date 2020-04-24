import React, {useState, useEffect} from 'react';
import ajax from '../../lib/ajax'
import UpdateSeller from './update/UpdateSeller'
import Delete from '../delete/Delete'

const SingleSeller = (props) => {
  const [seller, setSeller] = useState(undefined)

  const getSeller = () => {
    ajax.getSingleSeller(props.match.params.seller)
      .then(res => {
        setSeller(res.data[0])
      })
  }

  const deleteSeller = () => {

    ajax.deleteSeller(seller.name)
    props.history.push(`/user`)
  }

  useEffect(() => {
    getSeller()
  }, [])

  return (
    <div>
    {
      seller !== undefined
      ?
      <>
        <UpdateSeller seller={seller}/>
        <Delete delete={() => deleteSeller()} />
        <button onClick={() => props.history.push(`/user`)}>Back</button>
      </>
      :
      <h1>Loading...</h1>
    }
    </div>
  )
}

export default SingleSeller
