import React, {useContext} from 'react';
import {Flex, Icon, Image, Text} from '@chakra-ui/react';
import {ShopContext} from '../context/shopContext';

function NavBar() {
    const {openCart, openMenu, checkout} = useContext(ShopContext)

    return (
        <Flex flexDir="row" justifyContent="space-between" p="2rem">
            <Text>Menu</Text>
            <Text>Logo</Text>
            <Text>Cart</Text>
        </Flex>
    )
}

export default NavBar
