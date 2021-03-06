import React from "react";
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
// import { v4 } from 'uuid';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          name: "Ninja Sh%t",
          price: "$49.99",
          id: 0
        },
        {
          name: "More Ninja Sh%t",
          price: "$59.99",
          id: 1
        },
        {
          name: "Kunai",
          price: "$9.99",
          id: 2
        }
      ]
    };
  }

  viewCartToggle = () => {
    const { dispatch } = this.props;
    const action = {
      type: "TOGGLE_CART"
    }
    dispatch(action);
  }

  handleAddProductToCart = (product) => {
    const { dispatch } = this.props;
    const { id, name, price } = product;
    const action = {
      type: 'ADD_PRODUCT',
      id: id,
      name: name,
      price: price
    }
    dispatch(action);
    this.setState({cartVisibleOnPage: true});
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let isAddCartButtonVisible = null;

    if (this.state.cartVisibleOnPage) {
      isAddCartButtonVisible = false;
      currentlyVisibleState = <ShoppingCart
      shoppingCart={this.props.shoppingCart}
      addCartButton={isAddCartButtonVisible} />
      buttonText = <button onClick={this.viewCartToggle}>Return to Product List</button>
    } else {
      isAddCartButtonVisible = true;
      currentlyVisibleState = <ProductList
      productList={this.state.productList}
      onAddProductToCart={this.handleAddProductToCart}
      addCartButton={isAddCartButtonVisible} />
      buttonText = <button onClick={this.viewCartToggle}>View Cart</button>
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <br />
        <br />
        {buttonText}
      </React.Fragment>
    );
  };
}

// handleDeletingProduct = (key) => {
//   const newMasterProductList = this.state.masterProductList.filter(product => product.key !==key);
//   this.setState({
//     masterProductList: newMasterProductList,
//     selectedProduct: null
//   });
// }

const mapStateToProps = state => {
  return {
    shoppingCart: state,
    cartVisibleOnPage: state.cartVisibleOnPage
  }
}

ProductList.propTypes = {
  shoppingCart: PropTypes.object
};

ProductControl = connect(mapStateToProps)(ProductControl);

export default ProductControl;
