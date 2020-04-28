import React, {useState, useEffect} from 'react';
import ajax from '../../lib/ajax'
import SignOut from './SignOut'
import AllWines from '../crudWines/AllWines'
import SingleWine from '../crudWines/SingleWine'
import AllSellers from '../crudSellers/AllSellers'
const User = (props) => {

  useEffect(() => {
    ajax.checkLogin(props)
  }, [])

  return(
    <div className="userContainer">
      <div>
        <div>
        <AllWines allWines={props}/>
        <AllSellers allSellers={props}/>
        </div>

      </div>
      <div className="signOut"><SignOut signOut={props}/></div>

    </div>
  )
}

export default User
