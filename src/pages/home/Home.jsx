import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListaProjetos from "./components/ListaProjetos";
import Sessao from "@sessao";
import Modal from "./components/Modal";
import RegistroProjeto from "./components/RegistroProjeto";
import ListaConvidado from "./components/ListaConvidado";
import { useTabela } from "@useTabela";

export default function Home() {
  const [id, setId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigator = useNavigate();

  const usersTable = useTabela("usuario");
  const user = usersTable.encontrarUmPor("id", id);


  useEffect(() => {
    if (!Sessao.validar()) {
      Sessao.apagar("projetoSessao");
      navigator("/login");
    }

    const sessao = Sessao.obter();
    setId(sessao);

  }, []);

  function sair() {
    Sessao.apagar();
    Sessao.apagar("projetoSessao");
    navigator("/login");
  }

  return (
    <>
      <header className="flex justify-between items-center py-4 px-16 bg-secondary">
        <h1 className="text-3xl text-text font-bold">
          Ant<span className="text-primary">Nest</span>
        </h1>
        <nav>
          <ul className="md:flex items-center hidden">
            <div className="flex items-center gap-1">
              <li className="hidden text-text first-letter:uppercase md:block">{user.nome}</li>
              <li>
                <img
                  src={user.urlImagem}
                  alt=""
                  className="rounded-full w-16 h-16 mr-4 border-2 border-primary border-solid"
                />
              </li>
              <li>
                <button
                  className="rounded-xl py-2 px-8 bg-primary text-text hover:bg-white focus:w-24 focus:h-8 text-center duration-500"
                  onClick={sair}
                >
                  Sair
                </button>
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
          <h1 className="text-3xl font-bold text-center mt-14">Area de Trabalho</h1>

          <div className="flex flex-col gap-10 mb-8 mt-12 md:mt-7">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <h2 className="text-2xl uppercase text-center font-semibold">
                seus projetos
              </h2>
              <button
                className="rounded-xl py-2 px-8 bg-primary text-text hover:bg-secondary focus:w-24 focus:h-8 text-center duration-500"
                onClick={() => setIsOpen(true)}
              >
                Criar
              </button>
            </div>
            <Modal isOpen={isOpen} setModalOpen={() => setIsOpen(!isOpen)}>
              <RegistroProjeto id = {id}/>
            </Modal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 place-items-center md:place-items-stretch">
              <ListaProjetos id={id} />
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <h2 className="text-2xl uppercase text-center font-semibold">
                Projetos convidados
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 place-items-center md:place-items-stretch">   
                <ListaConvidado id={id}/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
