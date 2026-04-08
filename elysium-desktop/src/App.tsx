import { createSignal } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/core";

function App() {
  const [greetMsg, setGreetMsg] = createSignal("");
  const [name, setName] = createSignal("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name: name() }));
  }

  return (
    <main class="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-100">
      <div class="mx-auto flex w-full max-w-3xl flex-col items-center gap-8">
        <h1 class="text-center text-4xl tracking-tight">
          Racim text
        </h1>

        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noreferrer"
            class="rounded-xl p-2 transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-white/10"
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
            class="rounded-xl p-2 transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:hover:bg-white/10"
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
            class="rounded-xl p-2 transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:hover:bg-white/10"
          >
            <img
              src={logo}
              class="h-20 w-20 object-contain transition duration-300 hover:drop-shadow-[0_0_2em_#2f5d90]"
              alt="Solid logo"
            />
          </a>
        </div>

        <p class="text-center text-sm text-zinc-600 dark:text-zinc-300">
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
            class="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/30"
          />
          <button
            type="submit"
            class="inline-flex w-full items-center justify-center rounded-lg border border-transparent bg-blue-600 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40 sm:w-auto"
          >
            Greet
          </button>
        </form>

        <p class="min-h-6 text-center text-sm text-zinc-700 dark:text-zinc-200">
          {greetMsg()}
        </p>
      </div>
    </main>
  );
}

export default App;
