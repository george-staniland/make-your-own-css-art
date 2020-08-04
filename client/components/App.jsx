import React from 'react'
import Intro from './Intro'
import DrawingPage from './DrawingPage'

import {
  HashRouter as Router,
  Route,
  Link,
} from "react-router-dom"



const App = () => {
  return (
    <>
    <Router>
    <Route exact path="/" component={Intro}/>
    <Route path="/draw" component={DrawingPage} />



    </Router>
    </>   
  
  
  )
}

export default App


