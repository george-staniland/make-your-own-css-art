import React from 'react'
import {
    HashRouter as Router,
    Route,
    Link,
} from "react-router-dom"
//   import TestSvg from '../../server/public/Images/test-svg.svg' 

import BasicSVG from './BasicSVG'

class DrawingPage extends React.Component {


    // clicking the h1 text box add its Colour to local state
    // a little circle in top right displays that colour

    getColour = (currentColour) => {
        console.log("find current colour b!")
    }

    render() {


        return (
            <div>
                <button id="homeButton"><Link to="/">Home</Link></button>

                <div id="colourOptions">
                    <h1 onClick={this.getColour} style={{ color: 'bisque' }} >Bisque</h1>
                    <h1 onClick={this.getColour} style={{ color: 'cornflowerblue' }}>Cornflower Blue</h1>

                </div>
                <div id="drawingSection">
                    <BasicSVG />
                </div>


            </div>
        )
    }
}

export default DrawingPage