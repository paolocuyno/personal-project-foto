import React, { useState } from 'react';
import './Twilio.css';
import axios from 'axios'

export default function Twilio() {
  let [name, setName] = useState('')
  let [message, setMessage] = useState('')

  async function send() {
    let res = axios.post('/api/sendSMS', { name, message })
    await alert(`${name}, thank you for contacting Kevin`)
    setName('')
    setMessage('')
  }

  return (
    <div style={styles.body}>
      <div style={styles.form}>
        <h1>Text a friend to invite them to Foto</h1>
        <input 
          style={styles.nameInput} 
          onChange={(e) => setName(e.target.value)} 
          type='text'
          placeholder='Name...'
           />
        <textarea 
          style={styles.message} 
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Message...'
          ></textarea>
        <button 
          style={styles.button} 
          onClick={() => send()}>Send</button>
      </div>
    </div>
  );
}



const styles = {
  body: {
    background: 'blue',
    height: '100vh',
    overflow: 'hidden',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 500,
    background: 'lightgrey',
    width: 450,
    boxShadow:'2px 1px 3px 1px black'
  },
  nameInput: {
    height: 40,
    fontSize: 35,
    width: 350,
    border: '1px solid black',
    outline: 'none'
  },
  message: {
    minWidth: 350,
    maxWidth: 350,
    minHeight: 300,
    maxHeight: 300,
    border: '1px solid black',
    fontSize: 35,
    outline: 'none'
  },
  button: {
    height: 45,
    width: 200,
    background: 'black',
    borderRadius: 10,
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    outline: 'none'
  }
}