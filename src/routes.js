import React from 'react'
import Auth from './Components/Auth/Auth'
import Dash from './Components/Dash/Dash'
import Form from './Components/Form/Form'
import Post from './Components/Post/Post'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Update from './Components/Update'
import {HashRouter as Switch, Route} from 'react-router-dom'

export default (
    <Switch>
      <Route exact path="/" component={Auth} />
      <Route path="/dash" component={Dash} />
      <Route path="/post/:id" component={Post} />  
      <Route path="/form" component={Form} />  
      <Route path="/about" component={About}/>
      <Route path="/contact-us" component={Contact}/>
      <Route path="/update/:id" component={Update}/>

    </Switch>
  )