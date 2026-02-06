function Cart() {
  let cartCount = 0; // regular variable
  
  function addItem() {
    cartCount = cartCount + 1;
    console.log(cartCount); // What prints here?
  }
  
  return <button onClick={addItem}>Items: {cartCount}</button>;
}

export default Cart;