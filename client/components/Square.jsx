import React from 'react'

const sizeVal = () => {
    const min = 100
    const max = 400
    return ( Math.random() * (max - min) + min )
}


class Square extends React.Component  {

    state = {
        squareColour: '',
        height: sizeVal(),
        width: sizeVal(),
    }

handleClick= () => {
   this.setState ({
       squareColour: 'bisque',
       height: sizeVal(),
       width: sizeVal(),
   })
}
render () {

    return (
        <>
            <div>
                <div onClick = {this.handleClick} className='square' style={{ backgroundColor: this.state.squareColour, height: this.state.height, width: this.state.width, borderStyle: 'solid', borderColor: 'black', borderWidth:'8px' }}></div>
            </div>
        </>
    )

}
    
}

export default Square