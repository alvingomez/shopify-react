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
    Link    
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
            )) : <div>Empty Cart</div>
          }
          </DrawerBody>

          <DrawerFooter>            
            <Button w="100%">
              <Link href={checkout.webUrl}>Checkout</Link>  
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
} 

export default Cart
