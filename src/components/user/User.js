import React, {useState, useEffect} from 'react';
import axios from 'axios'
import SignOut from './SignOut'
import AllWines from '../crudWines/AllWines'
import SingleWine from '../crudWines/SingleWine'
const User = (props) => {

  const [displaySingle, setDisplaySingle] = useState(false)
  const [wineToDisplay, setWineToDisplay] = useState('')
  const toggledisplay = (wine='') => {
    setWineToDisplay(wine)
    setDisplaySingle(!displaySingle)
  }
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
      {
        displaySingle
        ?
        <SingleWine singleWine={props} wine={wineToDisplay} toggledisplay={toggledisplay}/>
        :
        <AllWines allWines={props} toggledisplay={toggledisplay}/>
      }
      </div>
      <div className="signOut"><SignOut signOut={props}/></div>

    </div>
  )
}

export default User
