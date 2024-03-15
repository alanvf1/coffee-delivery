import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CartContextProvider } from "./contexts/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
        <ToastContainer position="bottom-right" />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
