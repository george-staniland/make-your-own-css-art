import React from 'react'
import Image1 from './DrawingPage'
import {
    HashRouter as Router,
    Route,
    Link,
} from "react-router-dom"


class Intro extends React.Component {
    render() {
        return (

                <div id="intro-text-div" className="text-div-center">
                    <h1 id="intro-text">Use CSS built-in colours to decorate some art made by talented local artists</h1>
                    <button><Link to="/draw">MAKE SOMETHING</Link></button>
                </div>
        )
    }
}

export default Intro