import { CHECKOUT_BOOKING } from "../types";

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      return action.payload;
    default:
      return state;
  }
};
