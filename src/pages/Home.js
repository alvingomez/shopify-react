import React, {useContext} from 'react';

import {ShopContext} from '../context/shopContext';

function Home() {

    const {fetchAllProducts, products} = useContext(ShopContext)

    return (
        <div>
            Homepage
        </div>
    )
}

export default Home
