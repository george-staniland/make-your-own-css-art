import React from 'react'
import {
    HashRouter as Router,
    Route,
    Link,
} from "react-router-dom"
//   import TestSvg from '../../server/public/Images/test-svg.svg' 

import BasicSVG from './BasicSVG'
import House from './HouseSVG'

class DrawingPage extends React.Component {

    state = {
        paintBucketCurrent: ''
    }


    // clicking the h1 text box add its Colour to local state
    // a little circle in top right displays that colour

    getColour = (id) => {
        const currentCol = document.getElementById(id).style.color 
        this.setState({
            paintBucketCurrent: currentCol
        })
    }

    render() {
        

        return (
            <div>
                <button id="homeButton"><Link to="/">Home</Link></button>

                <div id="colourOptions">
                    <h1 id="bisque" onClick={ () => this.getColour("bisque")} style={{ color: 'bisque' }} >Bisque</h1>
                    <h1 id="blue" onClick={ () => this.getColour("blue")} style={{ color: 'cornflowerblue' }}>Cornflower Blue</h1>
                    <div id="paintBucketCircle" style={{ background: this.state.paintBucketCurrent }}> <p>Selected Colour:</p></div>

                </div>
                <div id="drawingSection">
                    <BasicSVG paintBucketColour={this.state.paintBucketCurrent} />
                </div>


            </div>
        )
    }
}

export default DrawingPage