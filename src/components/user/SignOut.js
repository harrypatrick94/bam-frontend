import React from "react";
// import "../styles.css";

// import ajax from '../lib/ajax'
// import axios from 'axios';

const SignOut = (props) => {
    // console.log("props: ", props.signOut);
    const logOut = () => {
      console.log(props)

      // window.localStorage.setItem(, undefined)
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("userId");
      console.log(window.localStorage.getItem("token"));
      console.log(window.localStorage.removeItem("userId"));
      props.signOut.history.push('/signin');
    }

  return (
    <button className="signOut" onClick={logOut}>Sign out</button>
  )
};

export default SignOut
