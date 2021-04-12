//This will contain all of the context for this project

import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY
  });
  
class shopProvider extends Component {

    state = {
        product: {},   //For the individual product
        products:[],   //All of the products we want to receive
        checkout:{},   //Contains all the checkout data
        isCartOpen: false, //
        isMenuOpen: false
      }

    render() {
        return (
            <div>
               <ShopContext.Provider>
               {this.props.children}
               </ShopContext.Provider>
            </div>
        )
    }
}

export default shopProvider
