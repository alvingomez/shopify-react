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
  } from "@chakra-ui/react"

import { ShopContext } from '../context/shopContext';

function Cart() {

  //Context implementation
    const {isCartOpen, closeCart, checkout, removeLineItem} = useContext(ShopContext);
    
    return (
        <>
        <Drawer        
        isOpen={isCartOpen}
        placement="right"
<<<<<<<
        onClose={closeCart}        
        >
=======
        onClose={closeCart}        
        >
          
>>>>>>>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            This is your cart
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
