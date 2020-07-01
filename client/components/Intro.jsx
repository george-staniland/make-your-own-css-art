import React from 'react'
import Image1 from './image1'
import {
    HashRouter as Router, 
    Route, 
    Link,
  } from "react-router-dom"


class Intro extends React.Component {
    render() {
        return (
            <Router>
                <div id="intro-text-div" className="text-div-center">
                    <h1>Hey, what's up? This is a colouring app. Add some shit to  the shit, what what ya'll. Peace.</h1>
                    <button><Link to="/image1">make something</Link></button>
                </div>




                <Route path="/image1" component={Image1} />



            </Router>
        )
    }
}

  export default Intro