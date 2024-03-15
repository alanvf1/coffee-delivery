import { ReactNode, createContext, useEffect, useReducer } from "react";
import { CartReducer } from "../reducers/cart/reducer";
import {
  addProductToCartAction,
  decreaseProductQuantityAction,
  emptyCartAction,
  increaseProductQuantityAction,
  removeProductFromCartAction,
} from "../reducers/cart/actions";
import { CartProduct } from "../pages/Checkout/components/CartProduct";

interface CartContextType {
  cartProducts: CartProduct[];
  addProductToCart: (cartProductID: CartProduct) => void;
  increaseProductQuantity: (cartProductId: string) => void;
  decreaseProductQuantity: (cartProductId: string) => void;
  removeProductFromCart: (cartProductId: string) => void;
  emptyCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    CartReducer,
    { cartProducts: [] },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
      return initialState;
    }
  );

  const { cartProducts } = cartState;

  function addProductToCart(product: CartProduct) {
    dispatch(addProductToCartAction(product));
  }
  function increaseProductQuantity(productId: string) {
    dispatch(increaseProductQuantityAction(productId));
  }
  function decreaseProductQuantity(productId: string) {
    dispatch(decreaseProductQuantityAction(productId));
  }

  function removeProductFromCart(productId: string) {
    dispatch(removeProductFromCartAction(productId));
  }

  function emptyCart() {
    dispatch(emptyCartAction());
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);
    localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
  }, [cartState]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        removeProductFromCart,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
