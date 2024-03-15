import { ShoppingCart } from "phosphor-react";
import {
  CoffeeCardContainer,
  CoffeeCardDescription,
  CoffeeCardFooter,
  CoffeeCardForm,
  CoffeeCardImage,
  CoffeeCardName,
  CoffeeCardPrice,
  CoffeeCardTags,
} from "./styles";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

export interface CoffeeProps {
  id: string;
  imgUrl: string;
  name: string;
  tags: string[];
  description: string;
  price: number;
}

export function CoffeeCard({
  id,
  imgUrl,
  name,
  tags,
  description,
  price,
}: CoffeeProps) {
  const { addProductToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const formatPrice = price.toFixed(2).toString().replace(".", ",");

  function handleIncreaseQuantity() {
    setQuantity((state) => (state >= 99 ? state : state + 1));
  }

  function handleDecreaseQuantity() {
    setQuantity((state) => (state <= 1 ? state : state - 1));
  }

  function handleAddProductToCart() {
    const cartProduct = {
      id,
      name,
      imgUrl,
      price,
      quantity,
    };
    addProductToCart(cartProduct);
    toast.success(
      <>
        <span>
          Produto adicionado ao carrinho com sucesso!{" "}
          <NavLink to="/checkout">Ir para carrinho</NavLink>
        </span>
      </>
    );
    setQuantity(1);
  }

  return (
    <CoffeeCardContainer>
      <CoffeeCardImage src={imgUrl} alt="" />
      <CoffeeCardName>{name}</CoffeeCardName>
      <CoffeeCardTags>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </CoffeeCardTags>
      <CoffeeCardDescription>{description}</CoffeeCardDescription>
      <CoffeeCardFooter>
        <CoffeeCardPrice>
          <span>
            R$ <strong>{formatPrice}</strong>
          </span>
        </CoffeeCardPrice>
        <CoffeeCardForm>
          <Input.Root inputSize="number">
            <Input.StepButton step="down" onClick={handleDecreaseQuantity} />
            <Input.Field
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
              step={1}
              min={1}
              max={99}
            />
            <Input.StepButton step="up" onClick={handleIncreaseQuantity} />
          </Input.Root>
          <Button
            color="white"
            background="purple"
            hoverBackground="purple-dark"
            type="button"
            onClick={handleAddProductToCart}
          >
            <ShoppingCart size={22} weight="fill" />
          </Button>
        </CoffeeCardForm>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  );
}
