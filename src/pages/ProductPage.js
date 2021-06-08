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
                <Heading>{product.title}</Heading>
            </Grid>           
        </Box>
      
        
    )
}

export default ProductPage
