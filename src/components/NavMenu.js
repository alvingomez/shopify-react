import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,   
    VStack,
    Text,
    Grid,
    Flex,
    Image,    
    Box    
  } from "@chakra-ui/react";

  import {ShopContext} from '../context/shopContext';

const NavMenu = () => {
    const {isMenuOpen, closeMenu} = useContext(ShopContext);
    
    return (
        <Drawer 
        isOpen={isMenuOpen}//default false
        placement="left"
        onClose={closeMenu}
        size="sm">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                    <VStack p="2rem">
                        <Link to="/">About Us</Link>
                        <Link to="/">Learn More</Link>
                        <Link to="/">Sustainabilty</Link>
                    </VStack>
                </DrawerBody>
                <DrawerFooter textAlign="center" >
                    <Text>@Copyright www.alvingomez.com</Text>
                </DrawerFooter>
            </DrawerContent>

        </Drawer>
            
        
    )
}

export default NavMenu;
