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
      formVisibleOnPage: false
    };
  }

  viewCart = () => {
    this.setState({formVisibleOnPage: true});
  }

  handleAddProductToCart = (id) => {
    const newCart = this.state.shoppingCart.push(this.state.productList[id])
    this.setState({shoppingCart: newCart});
  }

  render(){
    let currentlyVisibleState = null;
    let ViewCartButton = null; 

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <ShoppingCart 
      shoppingList={this.state.shoppingCart}/>
    } else {
      currentlyVisibleState = <ProductList 
      productList={this.state.productList} 
      onAddProductToCart={this.handleAddProductToCart} 
      shoppingCart={this.shoppingCart}/>
      ViewCartButton = <button onClick={this.viewCart}>View Cart</button>
    }
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {ViewCartButton}
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