import React from 'react'
import {Grid} from '@material-ui/core';
import Product from './Product/Product'

const Products = ({products , onAddToCart}) => {
    return (
        // main is similar to div 
        <main>  
            <Grid container justify ="center" spacing={4} gutterBottom>
                {
                    products.map((product)=>(
                        // SMALL DEVICES WILL TAKE UPTO 12 GRIDS 
                        // MEDIUM WITH 2 BLOCKS EACH ROW
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart} />
                            </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}

export default Products
