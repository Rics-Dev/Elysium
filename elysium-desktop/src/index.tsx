/* @refresh reload */
import { ColorModeProvider, ColorModeScript } from "@kobalte/core";
import { render } from "solid-js/web";
import "./index.css";
import App from "./App";

render(
  () => (
    <>
      <ColorModeScript />
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </>
  ),
  document.getElementById("root") as HTMLElement,
);
