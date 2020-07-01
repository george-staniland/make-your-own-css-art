import React from 'react'
import {
    HashRouter as Router, 
    Route, 
    Link,
  } from "react-router-dom"

class Image1 extends React.Component {
    render() {
        return (
            <div>
                <h1>This an an SVG image ya'll!!!</h1>
                <button><Link to="/">Home</Link></button>
            </div>
        )
    }
}

  export default Image1