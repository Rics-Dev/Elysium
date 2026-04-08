import { useColorMode } from "@kobalte/core";
import { Match, Switch } from "solid-js";

export function ThemeToggle() {
  const { colorMode, setColorMode } = useColorMode();

  const nextMode = () => setColorMode(colorMode() === "dark" ? "light" : "dark");

  return (
    <button
      type="button"
      onClick={nextMode}
      aria-label={colorMode() === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={colorMode() === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      class="inline-flex items-center justify-center rounded-md border border-border bg-background p-2 text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Switch>
        <Match when={colorMode() === "dark"}>🌙</Match>
        <Match when={colorMode() !== "dark"}>☀️</Match>
      </Switch>
      <span class="sr-only">Toggle theme</span>
    </button>
  );
}
