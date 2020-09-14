import React from "react";
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import { v4 } from 'uuid';

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
    const newCart = this.state.shoppingCart.push(this.state.productList[id])
    this.setState({shoppingCart: newCart});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.cartVisibleOnPage) {
      currentlyVisibleState = <ShoppingCart 
      shoppingList={this.state.shoppingCart} />
      buttonText = <button onClick={this.viewCartToggle}>Return to Product List</button>
    } else {
      currentlyVisibleState = <ProductList 
      productList={this.state.productList} 
      onAddProductToCart={this.handleAddProductToCart} />
      buttonText = <button onClick={this.viewCartToggle}>View Cart</button>
    }
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
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