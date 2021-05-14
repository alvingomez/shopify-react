//This will contain all of the context for this project

import React, { Component } from 'react';
import Client from 'shopify-buy';

//CONTEXT
const ShopContext = React.createContext();

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
        isCartOpen: false, //the values will handle the slide in cart
        isMenuOpen: false   
      }

    //Functions
    fetchAllProducts = async() => {
      // Fetch all products in your shop
      client.product.fetchAll().then((products) => {
        this.setState({products:products})
      });
    } 

    fetchProductWithHandle = async() => {
      // client.product.fetchByHandle(handle).then((product) => {
      //   // Do something with the product
      //   console.log(product);
      // });

      const product = await client.product.fetchByHandle(handle)
        this.setState({product:product})
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
}//End of shopProvider

const ShopConsumer = ShopContext.Consumer  //this is what will be consuming the Context

export {ShopConsumer, ShopContext}

export default shopProvider
