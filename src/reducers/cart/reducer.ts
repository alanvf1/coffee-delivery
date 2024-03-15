import { CartProduct } from "../../pages/Checkout/components/CartProduct";
import { ActionTypes } from "./actions";

export interface CartState {
  cartProducts: CartProduct[];
}

export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART: {
      const receivedCartProduct = action.payload.product;
      const receivedCartProductId = receivedCartProduct.id;
      const hasSameProductOnCart = state.cartProducts?.some(
        (cartProduct) => cartProduct.id === receivedCartProductId
      );
      const newCartProducts = state.cartProducts.map((cartProduct) => {
        if (cartProduct.id === receivedCartProductId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + receivedCartProduct.quantity,
          };
        } else {
          return cartProduct;
        }
      });

      if (!hasSameProductOnCart) {
        newCartProducts.push(receivedCartProduct);
      }

      return {
        ...state,
        cartProducts: [...newCartProducts],
      };
    }
    case ActionTypes.INCREASE_PRODUCT_QUANTITY: {
      const receivedProductId = action.payload.productId;

      return {
        ...state,
        cartProducts: [
          ...state.cartProducts.map((cartProduct) => {
            if (cartProduct.id === receivedProductId) {
              return { ...cartProduct, quantity: cartProduct.quantity + 1 };
            } else {
              return cartProduct;
            }
          }),
        ],
      };
    }

    case ActionTypes.DECREASE_PRODUCT_QUANTITY: {
      const receivedProductId = action.payload.productId;
      return {
        ...state,
        cartProducts: [
          ...state.cartProducts.map((cartProduct) => {
            if (cartProduct.id === receivedProductId) {
              return { ...cartProduct, quantity: cartProduct.quantity - 1 };
            } else {
              return cartProduct;
            }
          }),
        ],
      };
    }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const receivedProductId = action.payload.productId;

      return {
        ...state,
        cartProducts: [
          ...state.cartProducts.filter((cartProduct) => {
            return cartProduct.id != receivedProductId;
          }),
        ],
      };
    }
    case ActionTypes.EMPTY_CART: {
      return {
        ...state,
        cartProducts: [],
      };
    }
    default:
      return state;
  }
}
