import React, {useState} from 'react';
import './contact.css'
const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [confirmation, setConfirmation] = useState(false)
  const handleName = (e) => {
    let name = e.target.value
    setName(name)
  }

  const handleEmail = (e) => {
    let email = e.target.value
    setEmail(email)
  }

  const handleMessage = (e) => {
    let message = e.target.value
    setMessage(message)
  }
  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setConfirmation(true)
  }

  const sendEmail = (e) => {
    e.preventDefault();
    clearForm()
    const emailToSend = {name, email, message}
    fetch('http://ec2-52-62-179-225.ap-southeast-2.compute.amazonaws.com/send',{
        method: "POST",
        body: JSON.stringify(emailToSend),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })

  }
  return (

    <div className="contactContainer">
      <form className="contactForm" onSubmit={sendEmail}>
        <h2>Contact Us</h2>
        <ul className="formUL">
          <li className="formLI">
            <label className="contactLabel">Name</label>
            <br/>
            <input type="text" className="contactText" value={name} onChange={handleName}/>
          </li>
          <li className="formLI">
            <label className="contactLabel">Email</label>
            <br/>
            <input type="text" className="contactText" value={email} onChange={handleEmail}/>
          </li>
          <li className="formLI">
            <label className="contactLabel">Message</label>
            <br/>
            <textarea className="contactTextarea" value={message} onChange={handleMessage}/>
          </li>
          <li className="formLI">
            <input type="submit" className="contactSubmit"/>
          </li>
        </ul>
        {
        confirmation
        ?
        <p className="messageSent">Your message has been sent</p>
        :
        <p></p>
        }
      </form>
    </div>
  )
}

export default Contact
