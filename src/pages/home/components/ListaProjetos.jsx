import Sessao from "@sessao";
import Tabela from "@tabela";

import { useNavigate } from "react-router-dom";
//N sei pq ta dando erro :b
// @ts-ignore
import encontrarCargo from "/src/pages/projeto/helpers/handleCargo";
// @ts-ignore
import encontrarMembro from "/src/pages/projeto/helpers/handleMembro";
import { useTabela } from "@useTabela";


export default function ListaProjetos({ id }) {
  const navigator = useNavigate();
  const projetos = useTabela("projeto");
  const projetosUsuario = projetos.encontrarPor("idDono", id);

  const membros = new Tabela("membro");
  const tarefa = new Tabela("tarefa");
  const cargo = new Tabela("cargo");
  
  const Listagem = projetosUsuario.map((projeto) => {
  

    function deleteProjeto() {
      projetos.deletarPor("id", projeto.id);
      membros.deletarPor("idProjeto", projeto.id);
      tarefa.deletarPor("idProjeto", projeto.id);
      cargo.deletarPor("idProjeto", projeto.id);
      projetos.enviarParaLocalStorage();
      tarefa.enviarParaLocalStorage();
      cargo.enviarParaLocalStorage();
      membros.enviarParaLocalStorage();
    }

    function entrarProjeto() {
      Sessao.criar(projeto.id, "projetoSessao");
      Sessao.criar(encontrarMembro(), "membroSessao")
      Sessao.criar(encontrarCargo(), "cargoSessao")
      navigator("/projeto")
    }

    return (

      <div key={projeto.id} className="flex flex-col bg-accent items-center gap-8 border-black border-solid border-2 rounded p-4 min-w-64 max-h-56 box-content">
        <h1 className="text-2xl text-center">{projeto.nome}</h1>
        <h2 className="text-center w-52 text-base">{projeto.descricao}</h2>
        <div className="flex gap-2">
          <button className="bg-primary text-text py-2 px-4 rounded w-28 uppercase hover:bg-white text-center duration-500" onClick={deleteProjeto}>
            deletar
          </button>
          <button className="bg-primary text-text py-2 px-4 rounded w-28 uppercase hover:bg-white text-center duration-500" onClick={entrarProjeto}>entrar</button>
        </div>
      </div>
    );
  });

  return <>{Listagem}</>;
}
