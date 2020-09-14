import React from "react";
import PropTypes from "prop-types";

function Product(props) {
  let button = null;

  if(props.cartButton) {
    button = <button onClick={() =>
      props.whenAddProductToCart(props.id)}>Add to cart</button>
  }



  return (
    <React.Fragment>
      <hr />
      <h3>Product Name: {props.name}</h3>
      <h3>Price: {props.price}</h3>
      {button}
    </React.Fragment>
  )
}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.number,
  cartButton: PropTypes.bool
}

export default Product;
