import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Card from "./components/Card";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col bg-[#f4fbff] h-screen">
      <Header />
      <main className="flex-1 max-w-[1200px] w-full bg-[#f4fbff] m-auto">
        <Filter
          title="Busque o conteúdo que deseja assistir hoje"
          placeholder="Busque seu curso"
        />

        <div className="bg-white rounded-md py-2 mt-4 p-1">
          <p className="text-[#00A2f7] font-bold text-center text-2xl mb-4">
            Os cursos mais buscados
          </p>
          <div className="grid grid-cols-5 gap-2 mt-3">
            <Card
              title="Fundamentos do React.js"
              img="./react.png"
              horas="10h"
            />
            <Card title="Fundamentos do Node.js" img="./node.png" horas="12h" />
            <Card title="Fundamentos do Next.js" img="./Next.png" horas="5h" />
            <Card
              title="Fundamentos do TailwindCSS"
              img="./TailwindCSS.png"
              horas="8h"
            />
            <Card
              title="Fundamentos do VueJS"
              img="https://miro.medium.com/v2/1*OrjCKmou1jT4It5so5gvOA.jpeg"
              horas="15h"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </StrictMode>,
);
