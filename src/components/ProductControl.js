import React from "react";
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
// import { v4 } from 'uuid';
import { connect } from 'react-redux';

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
      ],
      shoppingCart: [],
      cartVisibleOnPage: false
    };
  }

  viewCartToggle = () => {
    this.setState(prevstate => ({
      cartVisibleOnPage: !prevstate.cartVisibleOnPage
    }));
  }

  handleAddProductToCart = (id) => {
    const { dispatch } = this.props;
    const { id, name, price, } = product;
    const action = {
      type: 'ADD_PRODUCT',
      id: id,
      names: names,
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
      shoppingList={this.state.shoppingCart}
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

export default ProductControl;
