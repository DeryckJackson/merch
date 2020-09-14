import React from "react";
import PropTypes from "prop-types";

function Product(props) {

  return (
    <React.Fragment>
      <h3>Product Name: {props.name}</h3>
      <h3>Price: {props.price}</h3>
    </React.Fragment>
  )
}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.number
}

export default Product;