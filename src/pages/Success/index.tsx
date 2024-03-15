import {
  SuccessContainer,
  SuccessContent,
  SuccessImage,
  SuccessMain,
  SuccessSubtitle,
  SuccessTitle,
  SucessContentItem,
  SucessContentItemIcon,
  SucessContentItemText,
} from "./styles";
import successImage from "../../assets/success-image.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useLocation } from "react-router-dom";

export function Success() {
  const { state } = useLocation();

  if (!!state) {
    return (
      <SuccessContainer>
        <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
        <SuccessSubtitle>
          Agora é só aguardar que logo o café chegará até você
        </SuccessSubtitle>
        <SuccessMain>
          <SuccessContent>
            <SucessContentItem>
              <SucessContentItemIcon $background="purple">
                <MapPin size={16} weight="fill" />
              </SucessContentItemIcon>
              <SucessContentItemText>
                Entrega em{" "}
                <strong>
                  {state.street}, {state.number} - {state.complement}
                </strong>
                <br />
                {state.neighborhood} - {state.city}, {state.uf}
              </SucessContentItemText>
            </SucessContentItem>
            <SucessContentItem>
              <SucessContentItemIcon $background="yellow">
                <Timer size={16} weight="fill" />
              </SucessContentItemIcon>
              <SucessContentItemText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </SucessContentItemText>
            </SucessContentItem>
            <SucessContentItem>
              <SucessContentItemIcon $background="yellow-dark">
                <CurrencyDollar size={16} weight="fill" />
              </SucessContentItemIcon>
              <SucessContentItemText>
                Pagamento na entrega
                <br />
                <strong>{state.paymentMethod}</strong>
              </SucessContentItemText>
            </SucessContentItem>
          </SuccessContent>
          <SuccessImage src={successImage} />
        </SuccessMain>
      </SuccessContainer>
    );
  } else {
    return <div>Nenhum pedido efetuado!</div>;
  }
}
