export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //   calculate items price
  state.itemsPrice = addDecimal(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  //   calculate shipping price(if order is more than 1000 then shipping change free otherwise 10rs charge below 1000rs)
  state.shippingPrice = addDecimal(state.itemsPrice > 1000 ? 0 : 10);
  //   calculate tax price(5%)
  state.texPrice = addDecimal(Number(0.05 * state.itemsPrice).toFixed(2));
  //   calculate total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.texPrice)
  ).toFixed(2);
  localStorage.setItem("cart", JSON.stringify(state));
  return state
};
