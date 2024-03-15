import {
  CartItems,
  CheckoutBiggerColumn,
  CheckoutCart,
  CheckoutCartValues,
  CheckoutCartValuesItem,
  CheckoutCartValuesTotal,
  CheckoutContainer,
  CheckoutSmallerColumn,
  CheckoutSubmit,
  CheckoutTitle,
} from "./styles";
import { CartProduct } from "./components/CartProduct";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { DeliveryInfosForm } from "./components/DeliveryInfosForm";

const deliveryInfosFormSchema = zod.object({
  zipcode: zod.string().min(9, "Insira um CEP válido"),
  street: zod.string().min(1, "Insira o nome da rua"),
  number: zod.string().min(1, "Insira o número do local"),
  complement: zod.string(),
  neighborhood: zod.string().min(2, "Insira o bairro"),
  city: zod.string().min(2, "Insira a cidade"),
  uf: zod.string().min(2, "Insira a UF"),
  paymentMethod: zod.string().min(1, "Insira um método de pagamento"),
});

type deliveryInfosFormData = zod.infer<typeof deliveryInfosFormSchema>;

export function Checkout() {
  const navigate = useNavigate();
  const { cartProducts, emptyCart } = useContext(CartContext);

  const cartProductsPrice = cartProducts?.reduce((acc, cartProduct) => {
    return (acc += cartProduct.price * cartProduct.quantity);
  }, 0);

  const shippingPrice = 0;
  const totalPrice = cartProductsPrice + shippingPrice;

  const cartProductsPriceFormatted = formatPrice(cartProductsPrice);
  const totalPriceFormatted = formatPrice(totalPrice);

  const isCartEmpty = totalPrice == 0;

  const deliveryInfosForm = useForm<deliveryInfosFormData>({
    resolver: zodResolver(deliveryInfosFormSchema),
    defaultValues: {
      zipcode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      uf: "",
      paymentMethod: "",
    },
  });

  const { handleSubmit } = deliveryInfosForm;

  function handleSubmitDeliveryInfos(data: deliveryInfosFormData) {
    emptyCart();
    navigate("/success", { state: { ...data } });
  }
  return (
    <CheckoutContainer onSubmit={handleSubmit(handleSubmitDeliveryInfos)}>
      <CheckoutBiggerColumn>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
        <FormProvider {...deliveryInfosForm}>
          <DeliveryInfosForm />
        </FormProvider>
      </CheckoutBiggerColumn>
      <CheckoutSmallerColumn>
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>
        <CheckoutCart>
          <CartItems>
            {cartProducts.map((cartProduct) => {
              return (
                <CartProduct
                  key={cartProduct.id}
                  id={cartProduct.id}
                  name={cartProduct.name}
                  imgUrl={cartProduct.imgUrl}
                  price={cartProduct.price}
                  quantity={cartProduct.quantity}
                />
              );
            })}
          </CartItems>
          <CheckoutCartValues>
            <CheckoutCartValuesItem>
              <span>Total de itens</span>
              <span>R$ {cartProductsPriceFormatted}</span>
            </CheckoutCartValuesItem>
            <CheckoutCartValuesItem>
              <span>Frete</span>
              <span>
                {shippingPrice > 0
                  ? `R$ ${formatPrice(shippingPrice)}`
                  : "Grátis"}
              </span>
            </CheckoutCartValuesItem>
            <CheckoutCartValuesTotal>
              <span>Total</span>
              <span>R$ {totalPriceFormatted}</span>
            </CheckoutCartValuesTotal>
          </CheckoutCartValues>
          <CheckoutSubmit disabled={isCartEmpty}>
            Confirmar pedido
          </CheckoutSubmit>
        </CheckoutCart>
      </CheckoutSmallerColumn>
    </CheckoutContainer>
  );
}
