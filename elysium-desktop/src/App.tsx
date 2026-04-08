import { createSignal } from "solid-js";
import { invoke } from "@tauri-apps/api/core";
import logo from "./assets/logo.svg";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/button";

export default function App() {
  const [greetMsg, setGreetMsg] = createSignal("");
  const [name, setName] = createSignal("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name: name() }));
  }

  return (
    <main class="min-h-screen bg-background px-6 py-12 text-foreground">
      <div class="mx-auto flex w-full max-w-3xl flex-col items-center gap-8">
        <div class="flex w-full justify-end">
          <ThemeToggle />
        </div>

        <h1 class="text-center text-4xl font-thin tracking-tight">Hello there</h1>

        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noreferrer"
            class="rounded-xl p-2 transition hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <img
              src="/vite.svg"
              class="h-20 w-20 object-contain transition duration-300 hover:drop-shadow-[0_0_2em_#747bff]"
              alt="Vite logo"
            />
          </a>

          <a
            href="https://tauri.app"
            target="_blank"
            rel="noreferrer"
            class="rounded-xl p-2 transition hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <img
              src="/tauri.svg"
              class="h-20 w-20 object-contain transition duration-300 hover:drop-shadow-[0_0_2em_#24c8db]"
              alt="Tauri logo"
            />
          </a>

          <a
            href="https://solidjs.com"
            target="_blank"
            rel="noreferrer"
            class="rounded-xl p-2 transition hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <img
              src={logo}
              class="h-20 w-20 object-contain transition duration-300 hover:drop-shadow-[0_0_2em_#2f5d90]"
              alt="Solid logo"
            />
          </a>
        </div>

        <p class="text-center text-sm text-muted-foreground">
          Click on the Tauri, Vite, and Solid logos to learn more.
        </p>

        <form
          class="flex w-full max-w-md flex-col items-center gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
            class="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
          />
          <Button
            type="submit"
          >
            Greet
          </Button>
        </form>

        <p class="min-h-6 text-center text-sm text-muted-foreground">{greetMsg()}</p>
      </div>
    </main>
  );
}
