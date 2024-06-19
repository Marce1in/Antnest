import React, { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";
import ListaProjetos from "./components/ListaProjetos";
import '../../types/tabelaTipos'

/** @type usuario */
const uwu = {
    id: crypto.randomUUID(),
    nome: "dudu",
    senha: "123",
    urlImagem: ""
}

export default function Home() {
  const [pessoas, setPessoas] = useState([]);
  const [projetos, setProjetos] = useState([]);
  const [nome, setNome] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("pessoas")) {
      const pessoas2 = JSON.parse(localStorage.getItem("pessoas"));
      setPessoas(pessoas2);

      for (let i = 0; i < pessoas2.length; i++) {
        if (pessoas2[i].sessao == 1) {
          setNome(pessoas2[i].name);
          break;
        }
      }
    }

    if (localStorage.getItem("projetos")) {
      const projetos2 = JSON.parse(localStorage.getItem("projetos"));
      setProjetos(projetos2);
    }
  }, []);

  const listaProjetos = projetos.map((projeto) => (
    <ListaProjetos key={projeto.name} projeto={projeto} />
  ));

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <header className="flex justify-between items-center py-4 px-16 bg-secondary">
        <h1 className="text-3xl text-text font-bold">
          Ant<span className="text-primary">Nest</span>
        </h1>
        <nav>
          <ul className="flex items-center hidden md:block">
            <div className="flex items-center gap-1">
              <li className="hidden text-text md:block">{nome}</li>
              <li>
                <img
                  src="./guaxinim.jpg"
                  alt=""
                  className="rounded-full w-16 h-16 mr-4 border-2 border-primary border-solid"
                />
              </li>
              <li className>
                <Link
                  to="/login"
                  className="rounded-xl py-2 px-8 bg-primary text-text"
                >
                  Sair
                </Link>
              </li>
            </div>
          </ul>
        </nav>
        <Link to="/login" className="w-9 md:hidden">
          <img src="./close.png" alt="" className="w-full" />
        </Link>
      </header>
      <main className="bg-background">
        <section className="flex flex-col py-16 px-36 gap-12 items-center md:items-start">
          <h1 className="text-3xl font-bold text-center">Area de Trabalho</h1>

          <div className="flex flex-col gap-10 mb-8">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <h2 className="text-2xl uppercase font-semibold">
                seus projetos
              </h2>
              <button
                className="rounded-xl py-2 px-8 bg-primary text-text"
                onClick={onOpenModal}
              >
                Criar
              </button>
            </div>
            <div className="flex flex-col md:flex-row">{listaProjetos}</div>
          </div>
          <Modal open={open} onClose={onCloseModal} center>
            <div className="flex flex-col p-16 items-center">
              <form action="" className="flex flex-col gap-7 items-center" >
                <h1 className="text-2xl font-bold">Novo Projeto</h1>
                <input
                  type="text"
                  placeholder="Nome do projeto"
                  className="rounded-md border-solid border-black border-2 p-2 w-48"
                />
                <textarea
                  placeholder="Descrição do projeto"
                  className="rounded-md border-solid border-black border-2 p-2 w-96 h-48"
                ></textarea>
                <button className="rounded-xl py-2 px-8 bg-primary text-text">
                  Criar
                </button>
              </form>
            </div>
          </Modal>

          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl uppercase font-semibold">
                Projetos convidados
              </h2>
            </div>
            <div className="grid">
              <div className="rounded-md border-solid border-black border-2 w-[17rem] h-[10rem] text-center">
                Projeto fake
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
