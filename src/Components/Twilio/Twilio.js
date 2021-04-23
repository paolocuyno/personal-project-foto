import React, { useState } from 'react';

import axios from 'axios'

export default function Twilio() {
  let [name, setName] = useState('')
  let [number, setNumber] = useState('')

  async function send() {
    let res = axios.post('/api/sendSMS', { name, number })
    await alert(`Thank you for inviting ${name} to visit our site!`)
    setName('')
    setNumber('')
  }

  return (
    <div style={styles.body}>
      <div style={styles.form}>
        <h1>Text a friend to invite them to Foto!</h1>
        <input 
          style={styles.input} 
          onChange={(e) => setName(e.target.value)} 
          type='text'
          placeholder='Name'
           />
        <input 
          style={styles.input} 
          onChange={(e) => setNumber(e.target.value)}
          placeholder='Number'
          ></input>
        <button 
          style={styles.button} 
          onClick={() => send()}>Send</button>
      </div>
    </div>
  );
}



const styles = {
  body: {
    color:'white',
    height:200,
    display:'flex',
   alignItems:'center',
    justifyContent:'center',
    borderRadius:'2rem' ,
    width:300
  },
  form: {
    display:'flex',
    flexDirection:'column',
    background:'#00000090',
    width:500,
    alignItems:'center',
    height:200,
 
    borderRadius:10
  },
  input:{
    width:450,
    height:40,
    fontSize:35,
    outline:'none'
  },

  message: {
    minWidth: 150,
    maxWidth: 350,
    minHeight: 100,
    maxHeight: 100,
    border: '1px solid black',
    fontSize: 35,
    outline: 'none'
  },
  button:{
    width:200,
    height:45,
    borderRadius:10,
    background:'teal',
    fontSize:35,
    fontWeight:'bold',
    letterSpacing:'0.07em'
  }
}