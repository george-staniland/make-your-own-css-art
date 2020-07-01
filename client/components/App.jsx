import React from 'react'
import Intro from './Intro'
import Image1 from './image1'

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
    <Route path="/image1" component={Image1} />



    </Router>
    </>   
  
  
  )
}

export default App


