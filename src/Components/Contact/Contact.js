import React from 'react';
import Twilio from '../Twilio/Twilio'
import axios from 'axios';
import styled from 'styled-components'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      title: '',
      message: ''
    }
  }

  handleInput = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  handleSend = () => {
    const { name, email, message, title } = this.state
    axios.post('/api/email', { name, email, message, title }).then(res => {
      this.setState({
        name: '',
        email: '',
        title: '',
        message: '',
        
      })
    })
  }

  render() {
    const { name, email, message, title,image } = this.state
    return (
      <Body>
        <div style={styles.form}>
          <h3 style={styles.header}>Email Sender</h3>
          <input style={styles.input} placeholder='Subject' type="text" name='title' value={title} onChange={this.handleInput} />
          <input style={styles.input} placeholder='name' type="text" name='name' value={name} onChange={this.handleInput} />
          <input style={styles.input} placeholder='email' type="text" name='email' value={email} onChange={this.handleInput} />
          <input style={styles.input} placeholder='message' type="text" name='message' value={message} onChange={this.handleInput} />
        
          <button style={styles.button} onClick={this.handleSend}>Send</button>
        </div>
        <Twilio/>
      </Body>
    )
  }
}

export default App;

const Body= styled.body`
  background-color:white;
    height:50vh;
    display:flex;
   align-items:center;
   text-align:center;
    justify-content:center;
    margin-top:20px;
    border-radius:2rem
`;



const styles = {

  form:{
    display:'flex',
    flexDirection:'column',
    background:'#00000090',
    width:500,
    alignItems:'center',
    height:500,
    justifyContent:'space-evenly',
    borderRadius:10
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
    height:50,
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