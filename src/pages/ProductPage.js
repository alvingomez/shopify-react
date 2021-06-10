import React, {useEffect, useContext} from 'react';
import {useParams, Link} from 'react-router-dom';
import {Box, Grid, Image, Text, Button, Flex, Center, Heading} from '@chakra-ui/react'

import {ShopContext} from '../context/shopContext';

const ProductPage = () => {
    const {handle} = useParams();

    const {fetchProductWithHandle, product} = useContext(ShopContext);

    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])

    if(!product.title){
        return <div>Loading...</div>
    }
        
    return (
        <Box>
            <Grid templateColumns="repeat(2, 1fr)">
                <Image src={product.images[0].src} />
                <Box>
                <Text>{product.variants[0].price}</Text>
                <Text>{product.description}</Text>
                <Heading>{product.title}</Heading>
                <Button onClick={() => addItemToCheckout(product.variants[0].id, 1)} >Add to Cart</Button>
                </Box>
            </Grid>           
        </Box>
      
        
    )
}

export default ProductPage
