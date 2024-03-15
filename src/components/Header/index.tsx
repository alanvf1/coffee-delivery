import { HeaderButton, HeaderButtonBadge, HeaderContainer } from "./styles";
import logoImg from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";

export function Header() {
  const { cartProducts } = useContext(CartContext);
  const totalCartItems = cartProducts?.reduce(
    (acc, cartItem) => (acc += cartItem.quantity),
    0
  );
  const hasItems = totalCartItems > 0;
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoImg} alt="Coffee Delivery" />
      </NavLink>
      <div>
        <HeaderButton $color="purple-dark" $backgroundColor="purple-light">
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </HeaderButton>
        <NavLink to="/checkout">
          <HeaderButton $color="yellow-dark" $backgroundColor="yellow-light">
            <ShoppingCart size={22} weight="fill" />
            {hasItems && (
              <HeaderButtonBadge>{totalCartItems}</HeaderButtonBadge>
            )}
          </HeaderButton>
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
