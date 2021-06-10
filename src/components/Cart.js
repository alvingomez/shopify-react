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
    Grid
  } from "@chakra-ui/react"

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
                <Text>{item.title}</Text>
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
