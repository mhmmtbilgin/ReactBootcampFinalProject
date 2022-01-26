import * as actionTypes from "./actionTypes";

export function SubmitForm(cartItem) {
  return {
    type: actionTypes.SUBMIT_FORM_SUCCESS,
    payload: cartItem,
  };
}
