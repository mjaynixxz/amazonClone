export const initialState = {
  basket: [],
  user: null,
};

//Selector function
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, payload) => payload.price + amount, 0);

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) newBasket.splice(index, 1);

      console.warn(`Cant remove product ${action.id} not in the basket`);
      return { ...state, basket: newBasket };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};