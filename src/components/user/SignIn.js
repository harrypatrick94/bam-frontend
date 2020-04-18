import React, {useState} from "react";
import ajax from '../../lib/ajax'
import axios from 'axios'
const SignIn = (props) => {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const handleUserName = (e) => {
    let name = e.target.value
    setUserName(name)
  }
  const handlePassword = (e) => {
    let password = e.target.value
    setPassword(password)
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    ajax.signIn(userName, password)
      .then( res => {
        window.localStorage.setItem("token", res.data.token)
        window.localStorage.setItem("userId", res.data.user.id)
        axios.defaults.headers.common['Authorization'] = res.data.token;
        props.history.push('/user');
      })
      .catch(err => {
        console.warn(err);
      })

      setUserName(undefined)
      setPassword(undefined)
  }

  return(
    <div className="signInContainer">
      <form onSubmit={handleSignIn}>
      <ul className="signInFormUl">
        <li className="signInFormLi">
          <label>userName</label>
        </li>
        <li className="signInFormLi">
          <input type="text" className="input" onChange={handleUserName} />
        </li>
        <li className="signInFormLi">
          <label>Password</label>
        </li>
        <li className="signInFormLi">
          <input type="text" className="input" onChange={handlePassword} />
        </li>
        <li>
          <input type="submit" className="signInUp"/>
        </li>
      </ul>
      </form>
    </div>
  )
}

export default SignIn
