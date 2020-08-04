import React from 'react'

class BasicSVG extends React.Component {

    state = {
        backgroundCol: 'white'
    }

    fillColour = () => {
        this.setState({
            backgroundCol: this.props.paintBucketColour,
        })
    }


    
    render () {
        console.log(this.props)
        return (
            <svg height="500px" cursor="pointer" id="svg_document" width="500px" baseProfile="full" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 500 500" visibility="visible"><title id="svg_document_title" visibility="visible">Untitled.svg</title><defs id="svg_document_defs" visibility="visible"></defs><g id="main_group" visibility="visible"></g>
                
            <rect onClick={this.fillColour} stroke="#000000" x="161px" height="271px" y="174px" id="rect1" strokeWidth="3px" width="136px" fill={this.state.backgroundCol} transform="" visibility="visible"></rect>
            
            <circle onClick={this.fillColour}stroke="#000000" transform="" id="circle1" strokeWidth="3px" cy="98px" fill={this.state.backgroundCol} r="45px" cx="226px" visibility="visible"></circle></svg>
        )
    }
        
}

export default BasicSVG