import React, {useState, useEffect} from 'react';
import axios from 'axios'
import SignOut from './SignOut'
import AllWines from '../crudWines/AllWines'
import SingleWine from '../crudWines/SingleWine'
import AllSellers from '../crudSellers/AllSellers'
const User = (props) => {

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      const token = window.localStorage.getItem("token")
      axios.defaults.headers.common['Authorization'] = token;
    } else {
      props.history.push("/signIn")
    }

  }, [])

  return(
    <div className="userContainer">
      logged in
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
