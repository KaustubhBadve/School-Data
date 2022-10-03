import { Box, Heading, Img } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const Loading = () => {
const [flag, setflag] = useState(false)
  
setTimeout(()=>{
    setflag(!flag)
},5000)

  return (
    <Box> 
{flag ? <Img w="500px" h="300px" src='https://c.tenor.com/hlKEXPvlX48AAAAC/loading-loader.gif'/> 
: <Heading>Test not Created</Heading>
}
    </Box>
   
  )
}

export default Loading