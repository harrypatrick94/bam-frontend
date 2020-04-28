import React, {useState, useEffect} from 'react';
import AddSeller from './add/AddSeller'
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
    <div className="sellerContainerBack">
      <div className="sellerListBack">
        {
          sellers.length > 0
          ?
          <ul className="allSellersBack">
            {sellers.map(seller => {
              return (<li className="sellerListLiBack" key={seller.name} onClick={() => singleSeller(seller.name)}>
                <div className='sellerListDivBack'>
                  <h3 className="sellerHeadingBack">{seller.name}</h3>
                  <img src={seller.img} alt={seller.name} className="sellerImgBack"/>
                </div>
              </li>)
            })
          }
          </ul>
          :
          <h1>Add vendor</h1>
        }
      </div>
      <div className="addSellerForm">
        <AddSeller/>
      </div>
    </div>
  )

}

export default AllSellers
