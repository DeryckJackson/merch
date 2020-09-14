import React from "react";
import Product from "./Product"
import PropTypes from "prop-types";

function ShoppingCart(props) {
  return (
    <React.Fragment>
      <h1>Cart</h1>
      <hr/>
      {props.shoppingList.map((product) =>
        <Product
          name={product.name}
          price={product.price}
          id={product.id} />
          
        )
      }
    </React.Fragment>
  )
}

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.array
}

export default ShoppingCart;