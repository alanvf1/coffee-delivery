import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { InputMask, MaskEvent } from "@react-input/mask";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { AddressForm, PaymentForm, PaymentMethod, Row } from "./styles";

export function DeliveryInfosForm() {
  const { register, setValue, formState, watch } = useFormContext();

  async function handleCEP(e: MaskEvent) {
    const cepValue = e.detail.value;
    if (cepValue.length >= 9) {
      const cepValueFormatted = cepValue.replace("-", "");
      const response = await fetch(
        `https://viacep.com.br/ws/${cepValueFormatted}/json/`
      );
      const responseData = await response.json();

      setValue("street", responseData.logradouro ?? "");
      setValue("neighborhood", responseData.bairro ?? "");
      setValue("city", responseData.localidade ?? "");
      setValue("uf", responseData.uf ?? "");
    }
  }

  function handlePaymentMethodChange(e: any) {
    e.preventDefault();
    setValue("paymentMethod", e.target.value);
  }

  return (
    <>
      <AddressForm>
        <address>
          <MapPinLine size={22} />
          <div>
            <span>Endereço de Entrega</span>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </address>
        <Row>
          <Input.Root>
            <InputMask
              component={Input.Field}
              placeholder="CEP"
              type="text"
              mask="_____-___"
              replacement={{ _: /\d/ }}
              {...register("zipcode")}
              onMask={handleCEP}
            />
            {formState.errors.zipcode && (
              <Input.Error>{formState.errors.zipcode.message}</Input.Error>
            )}
          </Input.Root>
        </Row>
        <Row>
          <Input.Root inputSize="big">
            <Input.Field
              placeholder="Rua"
              inputSize="big"
              {...register("street")}
            />
            {formState.errors.street && (
              <Input.Error>{formState.errors.street.message}</Input.Error>
            )}
          </Input.Root>
        </Row>
        <Row>
          <Input.Root>
            <Input.Field placeholder="Número" {...register("number")} />
            {formState.errors.number && (
              <Input.Error>{formState.errors.number.message}</Input.Error>
            )}
          </Input.Root>
          <Input.Root inputSize="big">
            <Input.Field
              placeholder="Complemento"
              inputSize="big"
              {...register("complement")}
            />
          </Input.Root>
        </Row>
        <Row>
          <Input.Root>
            <Input.Field placeholder="Bairro" {...register("neighborhood")} />
            {formState.errors.neighborhood && (
              <Input.Error>{formState.errors.neighborhood.message}</Input.Error>
            )}
          </Input.Root>
          <Input.Root inputSize="big">
            <Input.Field
              placeholder="Cidade"
              inputSize="big"
              {...register("city")}
            />
            {formState.errors.city && (
              <Input.Error>{formState.errors.city.message}</Input.Error>
            )}
          </Input.Root>

          <Input.Root inputSize="small">
            <Input.Field
              placeholder="UF"
              inputSize="small"
              {...register("uf")}
            />
            {formState.errors.uf && (
              <Input.Error>{formState.errors.uf.message}</Input.Error>
            )}
          </Input.Root>
        </Row>
      </AddressForm>
      <PaymentForm>
        <div>
          <CurrencyDollar size={22} />
          <div>
            <span>Pagamento</span>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </div>
        <Row>
          <PaymentMethod
            value="Cartão de Crédito"
            onClick={handlePaymentMethodChange}
            className={`${
              watch("paymentMethod") === "Cartão de Crédito" ? "active" : ""
            }`}
          >
            <CreditCard size={16} />
            Cartão de Crédito
          </PaymentMethod>
          <PaymentMethod
            value="Cartão de Débito"
            onClick={handlePaymentMethodChange}
            className={`${
              watch("paymentMethod") === "Cartão de Débito" ? "active" : ""
            }`}
          >
            <Bank size={16} />
            Cartão de Débito
          </PaymentMethod>
          <PaymentMethod
            value="Dinheiro"
            onClick={handlePaymentMethodChange}
            className={`${
              watch("paymentMethod") === "Dinheiro" ? "active" : ""
            }`}
          >
            <Money size={16} />
            Dinheiro
          </PaymentMethod>
        </Row>
        <Row>
          {formState.errors.paymentMethod && (
            <Input.Error>{formState.errors.paymentMethod.message}</Input.Error>
          )}
        </Row>
      </PaymentForm>
      <Row>
        <Input.Field type="hidden" {...register("paymentMethod")} />
      </Row>
    </>
  );
}
