import { CartProduct } from "../../pages/Checkout/components/CartProduct";

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  INCREASE_PRODUCT_QUANTITY = "INCREASE_PRODUCT_QUANTITY",
  DECREASE_PRODUCT_QUANTITY = "DECREASE_PRODUCT_QUANTITY",
  REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
  EMPTY_CART = "EMPTY_CART",
}

export function addProductToCartAction(product: CartProduct) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      product,
    },
  };
}

export function increaseProductQuantityAction(productId: string) {
  return {
    type: ActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload: {
      productId,
    },
  };
}

export function decreaseProductQuantityAction(productId: string) {
  return {
    type: ActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload: {
      productId,
    },
  };
}
export function removeProductFromCartAction(productId: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      productId,
    },
  };
}
export function emptyCartAction() {
  return {
    type: ActionTypes.EMPTY_CART,
  };
}
