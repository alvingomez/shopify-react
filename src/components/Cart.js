import React, {useContext} from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,   
    Button,
    Text,
    Grid,
    Flex,
    Image,
    Link,
    Box    
  } from "@chakra-ui/react";

import {CloseIcon} from "@chakra-ui/icons";

import { ShopContext } from '../context/shopContext';

function Cart() {

  //Context implementation
    const {isCartOpen, closeCart, checkout, removeLineItem} = useContext(ShopContext);
    
    return (
        <>
        <Drawer        
        isOpen={isCartOpen}
        placement="right"
        onClose={closeCart}
        size="sm"        
        >
          
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems?.length ? checkout.lineItems.map((item) => (
              <Grid templateColumns="repeat(4, 1fr)" gap={1} keys={item.id}>
                <Flex alignItems="center" justifyContent="center">
                  <CloseIcon cursor="pointer" onClick={() => removeLineItem(item.id)} />
                </Flex>
                <Flex alignItems="center" justifyContent="center">
                  <Image src={item.variant.image.src} />
                </Flex>
                <Flex alignItems="center" justifyContent="center">
                  <Text>{item.title}</Text>
                </Flex>                  
                <Flex>
                  <Text>{item.variant.price}</Text>
                </Flex>
              </Grid>
            )) : 
            <Box h="100%" w="100%" >  
              <Text h="100%" display="flex" flexDir="Column" alignItems="center" justifyContent="center">
                Your cart is empty!
              </Text>
            </Box>
          }
          </DrawerBody>

          {checkout.lineItems?.length ?
          <DrawerFooter>            
            <Button w="100%">
              <Link href={checkout.webUrl}>Checkout</Link>  
            </Button>
          </DrawerFooter>: null
          }
        </DrawerContent>
      </Drawer>
    </>
  )
} 

export default Cart
