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

                <div id="intro-text-div" className="text-div-center">
                    <h1>Click below to make something.Peace.</h1>
                    <button><Link to="/image1">MAKE SOMETHING</Link></button>
                </div>
        )
    }
}

export default Intro