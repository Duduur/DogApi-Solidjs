import { createSignal, createResource, For, Show } from "solid-js";

const fetchRacas = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  if (!res.ok) throw new Error("Falha ao buscar raças");
  const data = await res.json();
  return Object.keys(data.message).sort();
};

// Aqui esta buscando todas as imagens das raça
const fetchImages = async (raca) => {
  if (!raca) return [];
  const res = await fetch(`https://dog.ceo/api/breed/${raca}/images`);
  if (!res.ok) throw new Error("Falha ao buscar imagens");
  const data = await res.json();
  return data.message;
};

export default function App() {
  const [selectedraca, setSelectedraca] = createSignal("");
  const [racas] = createResource(fetchRacas);
  const [images] = createResource(selectedraca, fetchImages);

  return (
    <main class="max-w-6xl mx-auto p-6">
      <h1 class="text-3xl font-bold text-center mb-6">
        🐶 Dog API 
      </h1>

      {/* Seletor de raças */}
      <section class="mb-6 flex flex-col items-center gap-2">
        <label for="raca" class="text-lg font-medium">
          Escolha uma raça:
        </label>

        <Show when={!racas.loading} fallback={<span>Carregando raças…</span>}>
          <select
            id="raca"
            value={selectedraca()}
            onInput={(e) => setSelectedraca(e.currentTarget.value)}
            class="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          >
            <option value="">Selecione uma raça</option>
            <For each={racas()}>
              {(raca) => <option value={raca}>{raca}</option>}
            </For>
          </select>
        </Show>

        <Show when={racas.error}>
          <p class="text-red-600">Erro: {String(racas.error)}</p>
        </Show>
      </section>

      {/* Galeria */}
      <section>
        <Show
          when={selectedraca() && !images.loading}
          fallback={
            selectedraca() ? (
              <p class="text-center">Carregando imagens…</p>
            ) : (
              <p class="text-center">Selecione uma raça para ver imagens.</p>
            )
          }
        >
          <Show
            when={!images.error}
            fallback={
              <p class="text-red-600 text-center">Erro ao carregar imagens.</p>
            }
          >
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <For each={images()}>
                {(src) => (
                  <img
                    src={src}
                    alt={`Foto da raça ${selectedraca()}`}
                    class="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                  />
                )}
              </For>
            </div>
          </Show>
        </Show>
      </section>
    </main>
  );
}