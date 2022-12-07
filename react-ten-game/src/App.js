import { Button, Text } from '@chakra-ui/react'
import { useState } from 'react';
import './App.css';
import React from 'react';
import Nav from "./navbar"
import Card from './Card';
function App() {

  return (
    <div  className="App">

  <Nav/>

      <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
> 
  
  Welcome to Reach Ten Mini Game
</Text>
<Card/>
    </div>
  );
  
}

export default App;










