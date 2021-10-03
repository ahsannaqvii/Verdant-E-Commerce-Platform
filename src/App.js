import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart , Checkout } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const fetchProducts = async () => {
    // const response=await commerce.products.list();
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const addItemsToCartHandler = async (productID, quantity) => {
    const item = await commerce.cart.add(productID, quantity);
    // console.log(item);
    setCart(item.cart);
  };

  const handleUpdateCartQty=async(productID,qty)=>{
    //putting qty in object notation because this is only what we want to update
    const {cart} =await commerce.cart.update(productID,{qty})
    setCart(cart)
  }

  const handleRemoveFromCart=async(productID)=>{
    const {cart}=await commerce.cart.remove(productID);
    setCart(cart)

  }
  const handleEmptyCart=async()=>{
    const {cart}=await commerce.cart.empty();
    setCart(cart);
  }
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []); //EMPTY ARRAY TELLS YOU THAT IT WILL ONLY RUN ONCE THE APP STARTS

  return (
    <Router>
      <div>
        <Navbar items={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={addItemsToCartHandler} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} 
            handleEmptyCart={handleEmptyCart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleUpdateCartQty={handleUpdateCartQty}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart}></Checkout>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
