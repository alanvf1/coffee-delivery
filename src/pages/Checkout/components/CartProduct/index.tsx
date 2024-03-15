import { Trash } from "phosphor-react";
import {
  CartProductActions,
  CartProductContainer,
  CartProductDeleteButton,
  CartProductImg,
  CartProductMain,
  CartProductName,
  CartProductPrice,
} from "./styles";
import { Input } from "../../../../components/Input";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";

export interface CartProduct {
  id: string;
  name: string;
  imgUrl: string;
  price: number;
  quantity: number;
}

export function CartProduct({
  id,
  name,
  imgUrl,
  price,
  quantity,
}: CartProduct) {
  const {
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const formattedPrice = (price * quantity)
    .toFixed(2)
    .toString()
    .replace(".", ",");

  function handleIncreaseProductQuantity() {
    if (quantity < 99) {
      increaseProductQuantity(id);
    }
  }

  function handleDecreaseProductQuantity() {
    if (quantity > 1) {
      decreaseProductQuantity(id);
    }
  }

  function handleRemoveProductFromCart() {
    removeProductFromCart(id);
  }
  return (
    <CartProductContainer>
      <CartProductImg src={imgUrl} />
      <CartProductMain>
        <CartProductName>{name}</CartProductName>
        <CartProductActions>
          <Input.Root inputSize="number">
            <Input.StepButton
              step="down"
              onClick={handleDecreaseProductQuantity}
            />
            <Input.Field
              type="number"
              value={quantity}
              step={1}
              min={1}
              max={99}
              readOnly
            />
            <Input.StepButton
              step="up"
              onClick={handleIncreaseProductQuantity}
            />
          </Input.Root>
          <CartProductDeleteButton
            type="button"
            onClick={handleRemoveProductFromCart}
          >
            <Trash />
            Remover
          </CartProductDeleteButton>
        </CartProductActions>
      </CartProductMain>
      <CartProductPrice>R$ {formattedPrice}</CartProductPrice>
    </CartProductContainer>
  );
}
