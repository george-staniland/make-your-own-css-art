import React from 'react'
import {
    HashRouter as Router,
    Route,
    Link,
} from "react-router-dom"
import BasicSVG from './BasicSVG'

class DrawingPage extends React.Component {

    state = {
        paintBucketCurrent: 'transparent'
    }

    getColour = (id) => {
        const currentCol = document.getElementById(id).style.backgroundColor
        this.setState({
            paintBucketCurrent: currentCol
        })
    }

    render() {


        return (
            <div>
                <button id="homeButton"><Link to="/">Home</Link></button>

                <div id="colourOptions">
                    <h1 id="bisque" className="colour-options" onClick={() => this.getColour("bisque")} style={{ backgroundColor: 'bisque' }} >Bisque</h1>

                    <h1 id="blue" className="colour-options" onClick={() => this.getColour("blue")} style={{ backgroundColor: 'cornflowerblue' }}>Cornflower Blue</h1>

                    <h1 id="LightSalmon" className="colour-options" onClick={() => this.getColour("LightSalmon")} style={{ backgroundColor: 'LightSalmon' }}>Light Salmon</h1>

                    <h1 id="Tomato" className="colour-options" onClick={() => this.getColour("Tomato")} style={{ backgroundColor: 'Tomato' }}>Tomato</h1>

                    <h1 id="PeachPuff" className="colour-options" onClick={() => this.getColour("PeachPuff")} style={{ backgroundColor: 'PeachPuff' }}>PeachPuff</h1>

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



