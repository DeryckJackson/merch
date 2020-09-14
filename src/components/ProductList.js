import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";


// const masterProductList = [
//   {
//     name: "Ninja Sh%t",
//     price: "$49.99",
//     key: v4()
//   },
//   {
//     name: "More Ninja Sh%t",
//     price: "$59.99",
//     key: v4()
//   },
//   {
//     name: "Kunai",
//     price: "$9.99",
//     key: v4()
//   }
// ]



function ProductList(props) {
  return (
    <React.Fragment>
      {props.productList.map((product) =>
        <Product
          whenAddProductToCart={props.onAddProductToCart}
          name={product.name}
          price={product.price}
          id={product.id}
          cartButton={props.addCartButton}/>
        )
      }
      <hr />
    </React.Fragment >
  );
}

ProductList.propTypes = {
  productList: PropTypes.array.isRequired,
  addCartButton: PropTypes.bool,
  onAddProductToCart: PropTypes.func
}

export default ProductList;
