# 🚀 Passo a Passo: Instalação do SolidJS com Vite

## 📦 Pré-requisitos
- Node.js (v16 ou superior) → [baixar aqui](https://nodejs.org/)  
- npm (vem junto com o Node.js)  

Verifique se estão instalados:
sh
node -v
npm -v
`

---

## ⚡ Criando o Projeto

Execute no terminal:


npm create solid@latest


---

## 🛠️ Configuração Inicial

Responda às perguntas:

1. *Nome do projeto*

   
   ? Where should we create your project?
   → meu-projeto
   

2. *TypeScript?*

   
   ? Would you like to use TypeScript?
   → No (ou Yes, se preferir TS)
   

3. *Escolher template*

   
   ? Which template would you like to use?
   → solid + vite
   

---

## ▶️ Rodando o Projeto

Entre na pasta criada e instale as dependências:

sh
cd meu-projeto
npm install


Inicie o servidor de desenvolvimento:

sh
npm run dev


---

## 🌐 Acessando

No terminal aparecerá algo como:


Local: http://localhost:5173/


Abra no navegador para ver sua aplicação SolidJS rodando.

---

## ✨ Estrutura Básica do Projeto

* index.html → HTML principal
* src/index.jsx → Arquivo de entrada do SolidJS
* src/App.jsx → Componente principal da aplicação

Exemplo simples em *App.jsx*:

jsx
function App() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "blue" }}>Olá, SolidJS + Vite!</h1>
    </div>
  );
}

export default App;


---

## 🧩 O que é o Vite?

O *Vite* é uma ferramenta de build que:

* 🚀 Inicia o servidor rapidamente (hot reload instantâneo)
* 📦 Faz o bundle do código para produção
* 🔧 Compila JSX/TSX do SolidJS para JavaScript otimizado

---

## 📚 Documentação

* [SolidJS](https://www.solidjs.com/)
* [Vite](https://vitejs.dev/)
