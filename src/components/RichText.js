import React from 'react';
import {Box, Center, Heading, Text} from '@chakra-ui/react';

const RichText = ({heading, text}) => {
    return (
        <Box p="1rem" >
            <Center display="flex" flexDir="column">
                <Heading py="2.5rem">
                    {heading && heading}
                </Heading>
                <Text pb="2rem">
                    {text && text}
                </Text>
            </Center>
        </Box>
    )
}

export default RichText
