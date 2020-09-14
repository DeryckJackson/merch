import React from "react";
import PropTypes from "prop-types";

function Product(props) {

  return (
    <React.Fragment>
      <h3>Product Name: {props.name}</h3>
      <h3>Price: {props.price}</h3>
      <button onClick={() => props.whenAddProductToCart(props.id)}>Add to cart</button>
      <hr />
    </React.Fragment>
  )
}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.number,
  whenAddProductToCart: PropTypes.func
}

export default Product;