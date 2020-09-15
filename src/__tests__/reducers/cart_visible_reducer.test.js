import cartVisibleReducer from '../../reducers/cart_visible_reducer';

describe("formVisibleReducer", () => {
  
  test("should return default state if no action taken", () => {
    expect(cartVisibleReducer(false, { type:null })).toEqual(false);
  });

  test("should toggle cart visibility state to true", () => {
    expect(cartVisibleReducer(false, { type: 'TOGGLE_CART' })).toEqual(true);
  })

});