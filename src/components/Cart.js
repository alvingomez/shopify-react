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
    Image    
  } from "@chakra-ui/react";

import {CloseIcon} from "@chakra-ui/icons";

import { ShopContext } from '../context/shopContext';

function Cart() {

  //Context implementation
    const {isCartOpen, closeCart, checkout, removeLineItem} = useContext(ShopContext);
    console.log(checkout.lineItems);
    return (
        <>
        <Drawer        
        isOpen={isCartOpen}
        placement="right"
        onClose={closeCart}        
        >
          
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems && checkout.lineItems.map((item) => (
              <Grid templateColumns="repeat(4, 1fr)" gap={1} keys={item.id}>
                <Flex alignItems="center" justifyContent="center">
                  <CloseIcon/>
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
            ))}
          </DrawerBody>

          <DrawerFooter>
            
            <Button>Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
} 

export default Cart
