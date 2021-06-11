//This will contain all of the context for this project

import React, { Component } from 'react';
import { MdAddToPhotos } from 'react-icons/md';
import Client from 'shopify-buy';

//CONTEXT
const ShopContext = React.createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY
  });
  
class ShopProvider extends Component {

    state = {
        product: {},   //For the individual product
        products:[],   //All of the products we want to receive
        checkout:{},   //Contains all the checkout data
        isCartOpen: false, //the values will handle the slide in cart
        isMenuOpen: false   
      }

    //Get the checkout initially whenever we first load the application 
    //Cons: Whenever we refresh the browser the componentDidMount will create
    //a new checkout everytime, thus the whole cart will be cleared everytime
    //the browser refreshes
    componentDidMount(){
      if(localStorage.checkout_id){
        this.fetchCheckout(localStorage.checkout_id) 
      }else{
        this.createCheckout()
      }      
    }
    //Functions
    createCheckout = async () => {
      //Basically generates the checkout ID
      const checkout = await client.checkout.create();
      //To be able to keep track of the checkout ID
      localStorage.setItem("checkout_id", checkout.id)
      this.setState({checkout:checkout})
    } 

    fetchCheckout = (checkoutId) => {
        client.checkout
        //fetches an existing checkout
          .fetch(checkoutId)
          .then((checkout) => this.setState({checkout:checkout}))           
    }    

    //Adding Line items
    addItemToCheckout = async(variantId, quantity) => {
     
      const lineItemsToAdd = [
        {
          variantId: variantId, 
          quantity:parseInt(quantity, 10)
        }
      ]      
      //addLineItems is provided by Shopify
       //Add an item to the checkout
      const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd)
      this.setState({checkout:checkout}) 
    }
     
    //Removing an item from checkout
    removeLineItem = async (lineItemIdsToRemove) => {      
      const checkout = await client.checkout.removeLineItems(this.state.checkout.id, lineItemIdsToRemove)
      this.setState({checkout:checkout})
    }

    fetchAllProducts = async() => {
      // Fetch all products in your shop
      const products = await client.product.fetchAll();
      this.setState({products:products})

      // client.product.fetchAll().then((products) => {
      //   this.setState({products:products})
      // });
    } 

    fetchProductWithHandle = async(handle) => {
      // client.product.fetchByHandle(handle).then((product) => {
      //   // Do something with the product
      //   console.log(product);
      // });

      const product = await client.product.fetchByHandle(handle)
        this.setState({product:product})
    }

    //implementing changing the state 
    closeCart = () => {this.setState({isCartOpen:false})}
    openCart = () => {this.setState({isCartOpen:true})}

    render() {
      
        return (
            <div>
               <ShopContext.Provider value={
                  {...this.state,
                    fetchAllProducts:this.fetchAllProducts,
                    fetchProductWithHandle: this.fetchProductWithHandle,
                    addItemToCheckout:this.addItemToCheckout,
                    removeLineItem:this.removeLineItem,
                    closeCart:this.closeCart,
                    openCart:this.openCart,                                        
                 }
                 }>
               {this.props.children}
               </ShopContext.Provider>
            </div>
        )
    }
}//End of shopProvider

const ShopConsumer = ShopContext.Consumer  //this is what will be consuming the Context

export {ShopConsumer, ShopContext}

export default ShopProvider;
