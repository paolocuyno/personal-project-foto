import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import dash from "./assets/dash.jpg"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)


class App extends Component {
  render(){

  return (

        <div className="App">
          <Header/>
         
          {/* <Nav /> */}
          {routes} 
        </div>

    );
  }
}

export default App;
