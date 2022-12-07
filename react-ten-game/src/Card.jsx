import React from 'react'
import { Button, Text } from '@chakra-ui/react'
import { useState } from 'react';
import "./Card.css"
function Card() {

    const [count, setCount] = useState(0);
    const [turn, setTurn] = useState(true);
    const [hasWinner, setWinner] = useState(false)
  
    function handleCount(val){
      setCount(count+val)
    }
  
    function handleTurn(){
      setTurn(!turn)
    }
  
    function resetGame(){
      setCount(0);
      setTurn(true);
      setWinner(false);
    }
  
    function incrementButton(val){
      const newCount = count + val;
      if(newCount === 10){
        setWinner(true)
        handleCount(val)
        return;
      }
  
      handleCount(val)
      handleTurn()
    }
  return (

    <div  className='card'>
<h2>Its Your Turn: <span data-testid="turn-container">{turn? "Player 1": "Player 2"}</span> </h2>
<br></br>
      <div data-testid="buttons-container">
        <Button
        colorScheme='teal' variant='link'
        onClick={()=>incrementButton(1)} disabled={hasWinner}
        >
          +1
        </Button>
       
        <Button
        colorScheme='teal' variant='link'
        onClick={()=>incrementButton(2)} disabled={count >= 9 ? true:false}
        >
          +2
        </Button>
      </div>

      <br></br>
      <h1 >{count}</h1>


<br></br>
      <h2 >Winner: <span data-testid="winner-container">{(hasWinner === false? 'Still To Be Decided': turn? "Player 1": "Player 2")}</span> </h2>

     
      <Button 
      colorScheme='yellow' variant='link'
      onClick={()=>resetGame()}>
        Reset
      </Button>
     
    
      
    </div>
   
  )
}

export default Card