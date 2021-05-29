import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Box, Grid, Text, Image} from '@chakra-ui/react';

import {ShopContext} from '../context/shopContext';

function Home() {

    const {fetchAllProducts, products} = useContext(ShopContext);

    //Fetch all of the products when the hompage loads
    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    console.log(products)

    if(!products){
        return <div>...Loading</div>
    }
            
    return (
        <Box>
            {
            products.map((product) => (
                <Link to={`/products/${product.handle}`} key={product.id}>
                    <Image src={product.images[0].src}/>
                    {product.title}
                </Link>)
                )
            }
        </Box>
    )
}

export default Home
