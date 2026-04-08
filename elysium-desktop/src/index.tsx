/* @refresh reload */
import { ColorModeProvider, ColorModeScript } from "@kobalte/core";
import { render } from "solid-js/web";
import "./index.css";
import App from "./App";

render(
  () => (
    <>
      <ColorModeScript initialColorMode="system" />
      <ColorModeProvider initialColorMode="system">
        <App />
      </ColorModeProvider>
    </>
  ),
  document.getElementById("root") as HTMLElement,
);
