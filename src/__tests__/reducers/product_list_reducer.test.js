import productListReducer from '../../reducers/product_list_reducer';

describe('productListReducer', () => {

  test('should return default state if there is no action type passed into the reducer', () => {
    expect(productListReducer({}, { type: null })).toEqual({});
  })
})

describe('productListReducer', () => {
  let action;
  const productData = {
    name: "Stuff",
    price: 25,
    id: 3
  }

  const currentState = {
    1: {
      name: "things",
      price: 30,
      id: 1
    },
    2: {
      name: "more stuff",
      price: 40,
      id: 2
    }
  }

  test('Should add a product to the shoppingList and return the list', () => {
    const { name, price, id } = productData;
    action = {
      type: 'ADD_PRODUCT',
      name: name,
      price: price,
      id: id
    }
    expect(productListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        price: price,
        id: id
      }
    })
  })

  test('should successfully delete a product', () => {
    action = {
      type: "DELETE_PRODUCT",
      id: 1
    };
    expect(productListReducer(currentState, action)).toEqual({
      2: {
        name: "more stuff",
        price: 40,
        id: 2
      }
    })
  })
})