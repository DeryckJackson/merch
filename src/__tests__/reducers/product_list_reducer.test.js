import productListReducer from '../../reducers/product_list_reducer';

describe('productListReducer', () => {

  test('should return default state if there is no action type passed into the reducer', () => {
    expect(productListReducer({}, { type: null })).toEqual({});
  })
})

describe('')