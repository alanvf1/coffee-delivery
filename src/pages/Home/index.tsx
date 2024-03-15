import {
  CoffeeList,
  CoffeeListGrid,
  HomeIntro,
  HomeIntroImage,
  HomeIntroItem,
  HomeIntroItemIcon,
  HomeIntroItemText,
  HomeIntroItemsContainer,
  HomeIntroText,
} from "./styles";
import introImg from "../../assets/intro-image.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeCard } from "./components/CoffeeCard";
import { coffeeList } from "../../coffeeList";

export function Home() {
  return (
    <>
      <HomeIntro>
        <HomeIntroText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <HomeIntroItemsContainer>
            <HomeIntroItem>
              <HomeIntroItemIcon $background="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </HomeIntroItemIcon>
              <HomeIntroItemText>Compra simples e segura</HomeIntroItemText>
            </HomeIntroItem>
            <HomeIntroItem>
              <HomeIntroItemIcon $background="gray">
                <Package size={16} weight="fill" />
              </HomeIntroItemIcon>
              <HomeIntroItemText>
                Embalagem mantém o café intacto
              </HomeIntroItemText>
            </HomeIntroItem>
            <HomeIntroItem>
              <HomeIntroItemIcon $background="yellow">
                <Timer size={16} weight="fill" />
              </HomeIntroItemIcon>
              <HomeIntroItemText>Entrega rápida e rastreada</HomeIntroItemText>
            </HomeIntroItem>
            <HomeIntroItem>
              <HomeIntroItemIcon $background="purple">
                <Coffee size={16} weight="fill" />
              </HomeIntroItemIcon>
              <HomeIntroItemText>
                O café chega fresquinho até você
              </HomeIntroItemText>
            </HomeIntroItem>
          </HomeIntroItemsContainer>
        </HomeIntroText>
        <HomeIntroImage src={introImg} />
      </HomeIntro>
      <CoffeeList>
        <h2>Nossos cafés</h2>
        <CoffeeListGrid>
          {coffeeList.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                imgUrl={coffee.imgUrl}
                name={coffee.name}
                tags={coffee.tags}
                description={coffee.description}
                price={coffee.price}
              />
            );
          })}
        </CoffeeListGrid>
      </CoffeeList>
    </>
  );
}
