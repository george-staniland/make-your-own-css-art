import React from 'react'
import Square from './Square'
import Hand from './Hand'



const App = () => {
  return (
    <>
    <h1>Add some colour</h1>
    <div className = 'colouringArea'>
      <h1>Test Text</h1>
      {/* <img className="hand" src="./images/hand.svg" alt="a hand" /> */}
      <Hand/>
      <img className="hand" src="./images/Hedgehog2.svg" alt="a hand" />
    </div>
    </>   
  )
}

export default App


{/* <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/> */}