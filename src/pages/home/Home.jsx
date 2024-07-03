import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListaProjetos from "./components/ListaProjetos";
import Tabela from "@tabela";
import Sessao from "@sessao";
import { set } from "react-hook-form";
import { useTabela } from "@useTabela";
import Modal from "./components/Modal";
import RegistroProjeto from "./components/RegistroProjeto";

export default function Home() {
  const [nome, setNome] = useState();
  const [id, setId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    if (!Sessao.validar()) {
      navigator("/login");
    }

    const sessao = Sessao.obter();
    setId(sessao);

    const user = new Tabela("usuario");

    const usuario = user.encontrarUmPor("id", id);
    setNome(usuario.nome);
  }, []);

  function sair() {
    Sessao.apagar();
    navigator("/login");
  }

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
              <li>
                <button
                  className="rounded-xl py-2 px-8 bg-primary text-text"
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
          <h1 className="text-3xl font-bold text-center">Area de Trabalho</h1>

          <div className="flex flex-col gap-10 mb-8">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <h2 className="text-2xl uppercase font-semibold">
                seus projetos
              </h2>
              <button
                className="rounded-xl py-2 px-8 bg-primary text-text"
                onClick={() => setIsOpen(true)}
              >
                Criar
              </button>
            </div>
            <Modal isOpen={isOpen} setModalOpen={() => setIsOpen(!isOpen)}>
              <RegistroProjeto id = {id}/>
            </Modal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <ListaProjetos id={id} />
            </div>
          </div>

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
