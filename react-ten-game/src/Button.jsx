// import React from 'react'

// import {
//     Button,
//     ButtonGroup,
//     Popover,
//     Box,
//     PopoverTrigger,
//     PopoverContent,
//     PopoverHeader,
//     PopoverBody,
//     PopoverFooter,
//     PopoverArrow,
//     PopoverCloseButton,
//     PopoverAnchor,
//   } from '@chakra-ui/react'

// function WalkthroughPopover() {
//     const initialFocusRef = React.useRef()
//     return (
//       <Popover
//         initialFocusRef={initialFocusRef}
//         placement='bottom'
//         closeOnBlur={false}
//       >
//         <PopoverTrigger>
//           <Button>Trigger</Button>
//         </PopoverTrigger>
//         <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
//           <PopoverHeader pt={4} fontWeight='bold' border='0'>
//             Manage Your Channels
//           </PopoverHeader>
//           <PopoverArrow />
//           <PopoverCloseButton />
//           <PopoverBody>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore.
//           </PopoverBody>
//           <PopoverFooter
//             border='0'
//             display='flex'
//             alignItems='center'
//             justifyContent='space-between'
//             pb={4}
//           >
//             <Box fontSize='sm'>Step 1 of 6</Box>
//             <ButtonGroup size='sm'>
//               <Button colorScheme='green'>It's a 2 Player Mini Game</Button>
              
//               <Button colorScheme='blue' ref={initialFocusRef}>
//                 Next
//               </Button>
              
//             </ButtonGroup>
            
//           </PopoverFooter>
          
//         </PopoverContent>
//       </Popover>
//     )
//   }

//   export default WalkthroughPopover

// //   <Button colorScheme='green'>The game will have a counter with initital value zero.</Button>
// //               <Button colorScheme='green'>Each player will have alternate turns.</Button>
// //               <Button colorScheme='green'>In each turn player will have a choice to increment the counter by either 1 or 2.</Button>
// //               <Button colorScheme='green'>Player to reach 10 wins.</Button>
// //               <Button colorScheme='green'>Player 1 will go first by default.</Button>