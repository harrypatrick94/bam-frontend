import React, {useState, useEffect} from 'react';
import ajax from '../../lib/ajax'

const AllSellers = (props) => {
  const [sellers, setSellors] = useState('')

  const singleSeller = (seller) => {
    props.allSellers.history.push(`user/sellers/${seller}`)
  }
  const getSellers = () => {
    ajax.getAllSellers()
      .then(res => {
        setSellors(res.data)
      })
      .catch(err => console.warn(err))
  }

  useEffect(() => {
    getSellers()
  }, [])

  return (
    <div className="sellerlist">
      {
        sellers.length > 0
        ?
        <ul className="allWines">
          {sellers.map(seller => {
            return (<li className="sellerList" key={seller.name} onClick={() => singleSeller(seller.name)}>{seller.name}</li>)
          })
        }
        </ul>
        :
        <h1>Loading...</h1>
      }
    </div>
  )

}

export default AllSellers
