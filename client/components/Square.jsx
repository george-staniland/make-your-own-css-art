import React from 'react'

class Square extends React.Component  {

    state = {
        squareColour: '',
    }

handleClick= () => {
   this.setState ({
       squareColour: 'bisque'
   })
}
render () {

    return (
        <>
            <div>
                <div onClick = {this.handleClick} className='square' style={{ backgroundColor: this.state.squareColour, height: "100px", width: "100px", borderStyle: 'solid', borderColor: 'black' }}></div>
            </div>
        </>
    )

}
    
}

export default Square