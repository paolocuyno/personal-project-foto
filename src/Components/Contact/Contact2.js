import React, { useState } from 'react';
import Twilio from '../Twilio/Twilio'
import axios from 'axios';

export default function Contact(){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const[title,setTitle]=useState('')
    const[message,setMessage]=useState('')
    

   const handleInput = (e) => {
        const {name } = e.target
        setName({name })
      }
    
    const  handleSend = () => {
        let info={
            name:name,
            email:email,
            title:title,
            message:message
        }
        axios.post('/api/email', info).then(res => {
          handleSend(info)
            
          })
        }
      
    
      render() {
        const { name, email, message, title,image } = this.state
        return (
          <body>
            <div style={styles.form}>
              <h3 style={styles.header}>Email Sender</h3>
              <input style={styles.input} placeholder='Subject' type="text" name='title' value={title} onChange={handleInput} />
              <input style={styles.input} placeholder='name' type="text" name='name' value={name} onChange={handleInput} />
              <input style={styles.input} placeholder='email' type="text" name='email' value={email} onChange={handleInput} />
              <input style={styles.input} placeholder='message' type="text" name='message' value={message} onChange={handleInput} />
            
              <button style={styles.button} onClick={handleSend}>Send</button>
            </div>
            <Twilio/>
          </body>
        )
      }
    
    

    
    
    
    const styles = {
    
      body:{
        background:'white',
        height:'100vh',
        width:'100%',
        display:'inline-flex',
        flexDirection:'row',
       alignItems:'center',
        justifyContent:'center',
        borderRadius:'2rem' 
      },
    
      form:{
        display:'flex',
        flexDirection:'column',
        background:'#00000090',
        width:300,
        alignItems:'center',
        height:400,
        justifyContent:'space-evenly',
       
      },
      header:{
        fontSize:40,
        margin:0,
        color:'white',
        letterSpacing:'0.07em',
        fontWeight:'bold'
      },
      input:{
        width:450,
        height:40,
        fontSize:35,
        outline:'none'
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