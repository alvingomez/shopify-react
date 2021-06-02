import React, {useContext} from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button
  } from "@chakra-ui/react"
import { ShopContext } from '../context/shopContext';

function Cart() {

  //Context implementation
    const {isCartOpen, closeCart, checkout, removeLineItem} = useContext(ShopContext);
    const { isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = React.useRef()


    return (
        <>
        <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
            >
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
