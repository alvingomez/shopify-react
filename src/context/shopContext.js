//This will contain a;; pf the context for this project

import React, { Component } from 'react';
import Client from 'shopify-buy';

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
    domain: 'your-shop-name.myshopify.com',
    storefrontAccessToken: 'your-storefront-access-token'
  });
  

export class shopContext extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default shopContext
