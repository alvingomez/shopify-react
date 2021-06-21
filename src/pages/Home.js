import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Box, Grid, Text, Image} from '@chakra-ui/react';
import Hero from '../components/Hero';
import ImageWithText from '../components/ImageWithText';

import {ShopContext} from '../context/shopContext';

function Home() {

    const {fetchAllProducts, products} = useContext(ShopContext);

    //Fetch all of the products when the hompage loads
    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])  

    if(!products){
        return <div>...Loading</div>
    }
            
    return (
        
        <Box>
            <Hero />
            <Grid templateColumns={["repeat(1, 1fr)","repeat(3, 1fr)"]}>
                {
                products.map((product) => (
                    <Link to={`/products/${product.handle}`} key={product.id}>
                        <Box _hover={{opacity:'80%'}} textAlign='center'>
                        <Image src={product.images[0].src}/>
                            <Text>{product.title}</Text>
                            <Text>
                             ${product.variants[0].price}
                            </Text>
                        </Box>                    
                    </Link>)
                    )   
                }
            </Grid>
            <ImageWithText  
             image="https:cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758" 
             heading="Heading"
             text="Splash is one of the family of fragrances created by Perfumer Gal at the turn of the 20th Century. 
             For about 100 years the  classic fragrance has been the most popular in Spain."
             />
             <ImageWithText reverse 
             image="https:cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758" 
             heading="Heading2"
             text="Splash is one of the family of fragrances created by Perfumer Gal at the turn of the 20th Century. 
             For about 100 years the  classic fragrance has been the most popular in Spain."
             />
        </Box>
       
    )
}

export default Home
