import React, {useEffect, useContext} from 'react';
import {useParams, Link} from 'react-router-dom';
import {Box, Grid, Image, Text, Button, Flex, Center, Heading} from '@chakra-ui/react'

import {ShopContext} from '../context/shopContext';

const ProductPage = () => {
    const {handle} = useParams();

    const {fetchProductWithHandle, product, addItemToCheckout} = useContext(ShopContext);

    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])

    if(!product.title){
        return <div>Loading...</div>
    }
        
    return (
        <Box>
            <Grid templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)"]} m="auto">
                <Flex justifyContent="center" alignItems="center"> 
                    <Image src={product.images[0].src} />
                </Flex>                
                <Flex flexDirection="column">
                <Text>{product.variants[0].price}</Text>
                <Text>{product.description}</Text>
                <Heading>{product.title}</Heading>
                <Button onClick={() => addItemToCheckout(product.variants[0].id, 1)} >Add to Cart</Button>
                </Flex>
            </Grid>           
        </Box>
      
        
    )
}

export default ProductPage
