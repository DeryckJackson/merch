import React from "react";
import Product from "./Product"
import PropTypes from "prop-types";

function ShoppingCart(props) {
  return (
    <React.Fragment>
      <h1>Cart</h1>
      {Object.values(props.shoppingCart).map((product) => {
        return <Product
          name={product.name}
          price={product.price}
          id={product.id} />
        
      })}
      <hr/>
    </React.Fragment>
  )
}

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.object
}

export default ShoppingCart;
