import { commerce } from "./lib/commerce";
import NavBar from "./components/NavBar";
import React, { useState, useEffect } from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";


function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [cartFetched, setCartFetched] = useState(false)

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  console.log(cart)

  return (
    <div>
      <NavBar totalItems={cart.total_items} />
      <Home products={products} handleAddToCart={handleAddToCart} />
      {/*<Cart cart={cart} />*/}
    </div>
  );
}

export default App;
