import React from 'react';
import {Box, Flex, Button, Text, Heading, Image} from '@chakra-ui/react';

const ImageWithText = ({reverse, image}) => {
    const reverseSection = reverse ? 'row-reverse' : 'row'
    
    return (
        <Box>
          <Flex>   
            <Image src={image}/>                  
          </Flex> 
        </Box>
    )
}

export default ImageWithText
